# VibeCode-demo

This repository contains a simple **Rock Paper Scissors** web game. The game logic is implemented in C++, compiled to WebAssembly (WASM) using Emscripten, and the frontend is a static HTML page styled with Tailwind CSS. It's suitable for deployment on GitHub Pages or any static hosting.

## Files Overview

- `main.cpp` - C++ implementation of the game logic.
- `build.sh` - script to compile C++ to `rockpaperscissors.js`/`.wasm` using Emscripten.
- `index.html` - Tailwind CSS-based UI with buttons.
- `game.js` - JavaScript glue to call the WASM function and display results.

## Requirements

- [Emscripten SDK](https://emscripten.org/docs/getting_started/downloads.html) installed and activated.

  You can quickly setup the SDK inside the repo:
  ```sh
  git clone https://github.com/emscripten-core/emsdk.git
  cd emsdk
  ./emsdk install latest
  ./emsdk activate latest
  source ./emsdk_env.sh   # add this to your shell startup if you build often
  cd ..
  ```

  After sourcing the environment, `emcc --version` should work.

## Building

```sh
./build.sh
```

This will produce `rockpaperscissors.js` and `rockpaperscissors.wasm` in the workspace root.

## Usage

Open `index.html` in a modern browser (for example, start a quick local server with `python -m http.server` or a similar tool). Clicking a button will play a round.

For GitHub Pages, push the generated files (`index.html`, `game.js`, `rockpaperscissors.js`, `rockpaperscissors.wasm`) to the repository and enable Pages from the `main` branch.

Deployment ensures only static assets are needed.
