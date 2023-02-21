const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns a hash when passed with an event without partition key", () => {
    const trivialKey = deterministicPartitionKey("a");
    expect(trivialKey).toBe("c324156fcca3e7cb5ac7b8cd4fec155b24274972ef0bb77a34cedbf8de7d3317cf1126cc8c3924e3fb19b058a37d2bf2cd2e6563873e87de55010d3a13f76f51");
  });

  it("Returns a hash when passed with an event without partition key", () => {
    const trivialKey = deterministicPartitionKey({"somekey":"poll"});
    expect(trivialKey).toBe("20c929d67c303558651558506dfa5776bde4da1b7122fde583b4e4ed4a66d3506463833e89e391bc33431ab75d59ed881e939d498cb341df576597543c919b11");
  });

  it("Returns the same value when passed with an event with partitionKey with length <256", () => {
    const trivialKey = deterministicPartitionKey({"partitionKey":20});
    expect(trivialKey).toBe("20");
  });  

  it("Returns a hash value when passed with an event with partitionKey with length >256", () => {
    const trivialKey = deterministicPartitionKey({"partitionKey":"38jSZ151U4XW1Rv7BROKIgBKwbWHrhDzQALxhVCNbIpPeJ5ovHXZXpwpnU6clPTk4q6FlL3tkb47HGLhN92k5BjLDP41bH8vnugcQRi5739xJAyQfx1UaDlsVbuw9ejtTbExue3n9YmIqlxJG5p4GuVqDw8MQSU318ubYirTobODNJv39XHDCdfJzdorjQrioqxVzkFhXvkPSgeZuVp35gFCm6dDNttWG55c1UeTJIfx3ZfAkDTqnLi7CiG0BkF5DkgPeUIsgSiXBk25rmKFezsx6IR2PDqKwbM0Rxdd18Cv"});
    expect(trivialKey).toBe("6a09f7b823b3a55cd1f1d95eb5d8795f6a0da2b831b496458d37542d00e69aceef242f2677685c0e2ccf04b66e65a57587633277bfb553ca28cf1a29fdbdf679");
  });  

  it("Returns a hash value when passed with an event with partitionKey with length >256 and partitionKey value is not string", () => {
    const trivialKey = deterministicPartitionKey({"partitionKey":736972442084115906278720528945430352716965118720417520096394312378436478441344072353001176519841251098238071506093008204333068334946390892210985425270712654529872175730923944303737556501556619879999749962016206897710148984480124220185324630531495885232333548099524321175432218059991443571471713287518});
    expect(trivialKey).toBe("7.369724420841159e+299");
  });  

});
