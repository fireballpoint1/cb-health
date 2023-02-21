const crypto = require("crypto");
// constants
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

/**
 * Util functions in this block
**/
function getCandidateByEventPartitionKey(event) {
  if (event && event.partitionKey) return event.partitionKey;
  if (event && !event.partitionKey) {
    const data = JSON.stringify(event);
    return crypto.createHash("sha3-512").update(data).digest("hex");
  }
  //default
  return null;
}

function getCandidateValue(candidate) {
  if(!candidate) return TRIVIAL_PARTITION_KEY;
  if (candidate && typeof candidate !== "string") return JSON.stringify(candidate);
  //default
  return candidate
}

/**
 * Exports from here on
**/
exports.deterministicPartitionKey = (event) => {
  let candidateEvent = getCandidateByEventPartitionKey(event);
  let candidate = getCandidateValue(candidateEvent);
  
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
}; 