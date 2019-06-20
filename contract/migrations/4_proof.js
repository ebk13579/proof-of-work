var Verifier = artifacts.require("./verifier.sol");
var ProofOfWork = artifacts.require("./ProofOfWork.sol");

module.exports = (deployer) => {  
 let pow;
 return ProofOfWork.deployed().then((instance) => {
   pow = instance;
   let p = {
        "proof": {
            "a": ["0x2f7142d533af8230de7d10bee65a701a1ca8843d903002fa7e089d82664f5ee0", "0x15144eab397546df59efe2723a6a98521ccec4bb0833c4e0cba7904548ff6e7a"],
            "b": [["0x0370a0e4994cff2c0192dc550d8298d4dcedbe8990c2139a18abaec177e181a3", "0x00734149fa8fdf4cb28a92abc789dfc20ae8bb9ce262ecc004b165cd3b698a0d"], ["0x111394e9b222e8806d81d7ccfb95298d1a18cc92f8a310fe0562b92ef768e82a", "0x253174691f5dbb663875dff8096e48f6a92a59c1c23ad84085b8213befff288f"]],
            "c": ["0x044bfbec0a67ea21eabbdf4fdcf7da0edf0cc726ba124e68687e885498ecea2c", "0x2af12b891d58874ad0ccecee01043cf2133d41b9523d8f0df97011e49150c9ba"]
        },
        "inputs": ["0x20efac506a3d21dc3882103a7a727ad821f2422988783ee8b2f1762ecd0dbb03", "0x24da398ed1996eae6dafb3a687806e3a49c3add6949774d6017b30a66b2503ce", "0x000000000000000000000000000000000000000000000000000000000000002a", "0x000000000000000000000000000000000000000000000000000000000000002a", "0x0a5ec76e95922ec59c8fde1a370de81f0b41b35982af6aa77aecede99ae1ee49", "0x068153a45831c658bddb1ec47741e1a4368ebeac2324369cf02f026974ab3f1c", "0x000000000000000000000000000000000000000000000000000000000000000b"]
    };
   
   return pow.addHours(p.proof.a, p.proof.b, p.proof.c, p.inputs);
 }).then((secs) => {
  console.log(secs);
  return pow;
 })

 return pow;
};
