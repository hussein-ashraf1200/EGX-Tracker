[15:32:13.328] Running build in Washington, D.C., USA (East) – iad1
[15:32:13.329] Build machine configuration: 2 cores, 8 GB
[15:32:13.344] Cloning github.com/hussein-ashraf1200/EGX-Tracker (Branch: main, Commit: cfbd61e)
[15:32:13.352] Skipping build cache, deployment was triggered without cache.
[15:32:13.708] Cloning completed: 363.000ms
[15:32:14.017] Running "vercel build"
[15:32:14.451] Vercel CLI 43.3.0
[15:32:15.036] Installing dependencies...
[15:32:23.072] 
[15:32:23.072] added 374 packages in 8s
[15:32:23.073] 
[15:32:23.073] 67 packages are looking for funding
[15:32:23.073]   run `npm fund` for details
[15:32:23.119] Running "npm run build"
[15:32:23.227] 
[15:32:23.228] > my-project@0.0.0 build
[15:32:23.228] > vite build
[15:32:23.228] 
[15:32:23.504] [36mvite v6.3.5 [32mbuilding for production...[36m[39m
[15:32:23.815] transforming...
[15:32:24.609] [32m✓[39m 62 modules transformed.
[15:32:24.621] [31m✗[39m Build failed in 1.09s
[15:32:24.622] [31merror during build:
[15:32:24.622] [31mCould not resolve "../context/watchListContext" from "src/pages/Home.jsx"[31m
[15:32:24.622] file: [36m/vercel/path0/src/pages/Home.jsx[31m
[15:32:24.622]     at getRollupError (file:///vercel/path0/node_modules/rollup/dist/es/shared/parseAst.js:401:41)
[15:32:24.622]     at error (file:///vercel/path0/node_modules/rollup/dist/es/shared/parseAst.js:397:42)
[15:32:24.623]     at ModuleLoader.handleInvalidResolvedId (file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:21408:24)
[15:32:24.623]     at file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:21368:26[39m
[15:32:24.709] Error: Command "npm run build" exited with 1
[15:32:24.926] 
[15:32:28.027] Exiting build container