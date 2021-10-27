class TestPlugin {
  //编写一个构造器
  constructor(options) {
    console.log(options);
  }

  apply(compiler) {
    compiler.hooks.done.tap("TestPlugin", () => {
      console.log("done");
    });

    compiler.hooks.compile.tap("TestPlugin", () => {
      console.log("compile");
    });
    compiler.hooks.compilation.tap("TestPlugin", (compilation) => {
      console.log("compilation");
      compilation.hooks.chunkAsset.tap("TestPlugin", (chunk, filename) => {
        // console.log(chunk);
        // console.log(filename);
      });
    });
  }
}

module.exports = TestPlugin;
