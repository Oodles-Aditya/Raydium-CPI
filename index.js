"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var web3_js_1 = require("@solana/web3.js");
var spl_token_1 = require("@solana/spl-token");
var raydium_sdk_1 = require("@raydium-io/raydium-sdk");
var raydium_sdk_2 = require("@raydium-io/raydium-sdk");
var decimal_js_1 = require("decimal.js"); // Assuming Decimal is used for priceLimity
var BN = require('bn.js');
var connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)('devnet'), 'confirmed');
var market = function () { return __awaiter(void 0, void 0, void 0, function () {
    var payer, targetMarketId, token1, token2, mintInfo1, mintInfo2, Token1Ata, Token2Ata, SOL, startTime, walletAccount, makeTxVersion, makeCreatePool, poolKeys, extraPoolInfo, _a, maxAnotherAmount, anotherAmount, liquidity, addLiquidityInstructionResponse, fromTokenAccount, toTokenAccount, amountIn, minimumAmountOut, priceLimit, remainingAccounts, ownerInfo, swapInstruction, transaction, transactionSignature;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                payer = web3_js_1.Keypair.generate();
                targetMarketId = web3_js_1.Keypair.generate().publicKey;
                return [4 /*yield*/, (0, spl_token_1.createMint)(connection, payer, payer.publicKey, null, 9)];
            case 1:
                token1 = _b.sent();
                return [4 /*yield*/, (0, spl_token_1.createMint)(connection, payer, payer.publicKey, null, 9)];
            case 2:
                token2 = _b.sent();
                return [4 /*yield*/, (0, spl_token_1.getMint)(connection, token1)];
            case 3:
                mintInfo1 = _b.sent();
                return [4 /*yield*/, (0, spl_token_1.getMint)(connection, token2)];
            case 4:
                mintInfo2 = _b.sent();
                return [4 /*yield*/, (0, spl_token_1.getOrCreateAssociatedTokenAccount)(connection, payer, token1, payer.publicKey)];
            case 5:
                Token1Ata = _b.sent();
                return [4 /*yield*/, (0, spl_token_1.getOrCreateAssociatedTokenAccount)(connection, payer, token2, payer.publicKey)];
            case 6:
                Token2Ata = _b.sent();
                return [4 /*yield*/, (0, spl_token_1.mintTo)(connection, payer, token1, Token1Ata.address, payer.publicKey, 1000000000)];
            case 7:
                _b.sent(); // 1000 tokens
                return [4 /*yield*/, (0, spl_token_1.mintTo)(connection, payer, token2, Token2Ata.address, payer.publicKey, 1000000000)];
            case 8:
                _b.sent();
                SOL = new web3_js_1.PublicKey('So11111111111111111111111111111111111111112');
                startTime = Math.floor(Date.now() / 1000) + 60;
                60;
                24 * 7;
                return [4 /*yield*/, getWalletTokenAccount(connection, payer.publicKey)];
            case 9:
                walletAccount = _b.sent();
                makeTxVersion = raydium_sdk_1.TxVersion.V0;
                makeCreatePool = raydium_sdk_1.Liquidity.makeCreatePoolV4InstructionV2Simple({
                    connection: connection,
                    programId: raydium_sdk_1.MAINNET_PROGRAM_ID.AmmV4,
                    marketInfo: {
                        marketId: targetMarketId,
                        programId: raydium_sdk_1.MAINNET_PROGRAM_ID.OPENBOOK_MARKET,
                    },
                    baseMintInfo: { mint: token1, decimals: 9 },
                    quoteMintInfo: { mint: SOL, decimals: 9 },
                    baseAmount: new BN(10000),
                    quoteAmount: new BN(10000),
                    startTime: new BN(Math.floor(startTime)),
                    ownerInfo: {
                        feePayer: payer.publicKey,
                        wallet: payer.publicKey,
                        tokenAccounts: walletAccount,
                        useSOLBalance: true,
                    },
                    associatedOnly: false,
                    checkCreateATAOwner: true,
                    makeTxVersion: makeTxVersion,
                    feeDestinationId: new web3_js_1.PublicKey('7YttLkHDoNj9wyDur5pM1ejNaAvT9X4eqaYcHQqtj2G5'), // only mainnet use this
                });
                return [4 /*yield*/, connection.getAccountInfo(makeCreatePool)];
            case 10:
                poolKeys = _b.sent();
                if (!poolKeys)
                    return [2 /*return*/];
                return [4 /*yield*/, raydium_sdk_1.Liquidity.fetchInfo({ connection: connection, poolKeys: poolKeys })];
            case 11:
                extraPoolInfo = _b.sent();
                _a = raydium_sdk_1.Liquidity.computeAnotherAmount({
                    poolKeys: poolKeys,
                    poolInfo: __assign(__assign({}, targetPoolInfo), extraPoolInfo),
                    amount: new raydium_sdk_1.TokenAmount(new raydium_sdk_1.Token(spl_token_1.TOKEN_PROGRAM_ID, token1, 9, 'krishan', 'krishan'), 100),
                    anotherCurrency: new raydium_sdk_1.Token(spl_token_1.TOKEN_PROGRAM_ID, SOL, 9, 'SOL', 'SOL'),
                    slippage: new raydium_sdk_1.Percent(1, 100),
                }), maxAnotherAmount = _a.maxAnotherAmount, anotherAmount = _a.anotherAmount, liquidity = _a.liquidity;
                console.log('will add liquidity info', {
                    liquidity: liquidity.toString(),
                    liquidityD: new decimal_js_1.default(liquidity.toString()).div(Math.pow(10, extraPoolInfo.lpDecimals)),
                });
                return [4 /*yield*/, raydium_sdk_1.Liquidity.makeAddLiquidityInstructionSimple({
                        connection: connection,
                        poolKeys: poolKeys,
                        userKeys: {
                            owner: payer.publicKey,
                            payer: payer.publicKey,
                            tokenAccounts: walletAccount,
                        },
                        amountInA: new raydium_sdk_1.TokenAmount(new raydium_sdk_1.Token(spl_token_1.TOKEN_PROGRAM_ID, token1, 9, 'krishan', 'krishan'), 100),
                        amountInB: maxAnotherAmount,
                        fixedSide: 'a',
                        makeTxVersion: makeTxVersion,
                    })
                    //   const POOL_ADDRESS = new PublicKey("8sLbNZoA1cfnvMJLPfp98ZLAnFSYCFApfJKMbiXNLwxj");
                    //const poolKeys: LiquidityPoolKeysV4 =await Liquidity.fetchInfo({ connection, POOL_ADDRESS });
                    // You should have the tokenA and tokenB accounts ready for swapping
                ];
            case 12:
                addLiquidityInstructionResponse = _b.sent();
                //   const POOL_ADDRESS = new PublicKey("8sLbNZoA1cfnvMJLPfp98ZLAnFSYCFApfJKMbiXNLwxj");
                //const poolKeys: LiquidityPoolKeysV4 =await Liquidity.fetchInfo({ connection, POOL_ADDRESS });
                // You should have the tokenA and tokenB accounts ready for swapping
                console.log(poolKeys);
                fromTokenAccount = mintInfo1.address;
                toTokenAccount = mintInfo2.address;
                amountIn = new BN(1000000);
                minimumAmountOut = new BN(1);
                priceLimit = new decimal_js_1.default(0);
                remainingAccounts = [];
                ownerInfo = {
                    feePayer: payer.publicKey,
                    wallet: payer.publicKey,
                    tokenAccounts: [
                        {
                            // Example TokenAccount structure
                            mint: token1,
                            owner: payer.publicKey,
                            address: fromTokenAccount,
                        },
                        {
                            mint: SOL,
                            owner: payer.publicKey,
                            address: toTokenAccount,
                        }
                    ],
                    useSOLBalance: false // Set to true if using SOL instead of an SPL token
                };
                return [4 /*yield*/, raydium_sdk_1.Liquidity.makeSwapInstruction({
                        poolKeys: poolKeys,
                        userKeys: {
                            owner: payer.publicKey,
                            tokenAccountIn: fromTokenAccount,
                            tokenAccountOut: toTokenAccount,
                            //payer: payer.publicKey,
                        },
                        amountIn: amountIn,
                        amountOut: minimumAmountOut,
                        fixedSide: "in" // Assuming you are swapping a fixed amount of input tokens
                    })];
            case 13:
                swapInstruction = _b.sent();
                transaction = new web3_js_1.Transaction().add(swapInstruction.innerTransaction[0]);
                return [4 /*yield*/, connection.sendTransaction(transaction, [payer], { skipPreflight: false, preflightCommitment: "confirmed" })];
            case 14:
                transactionSignature = _b.sent();
                console.log("Swap transaction signature:", transactionSignature);
                return [2 /*return*/];
        }
    });
}); };
market();
function getWalletTokenAccount(connection, wallet) {
    return __awaiter(this, void 0, void 0, function () {
        var walletTokenAccount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.getTokenAccountsByOwner(wallet, {
                        programId: spl_token_1.TOKEN_PROGRAM_ID,
                    })];
                case 1:
                    walletTokenAccount = _a.sent();
                    return [2 /*return*/, walletTokenAccount.value.map(function (i) { return ({
                            pubkey: i.pubkey,
                            programId: i.account.owner,
                            accountInfo: raydium_sdk_1.SPL_ACCOUNT_LAYOUT.decode(i.account.data),
                        }); })];
            }
        });
    });
}
function formatAmmKeysById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var account, info, marketId, marketAccount, marketInfo, lpMint, lpMintAccount, lpMintInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.getAccountInfo(new web3_js_1.PublicKey(id))];
                case 1:
                    account = _a.sent();
                    if (account === null)
                        throw Error(' get id info error ');
                    info = raydium_sdk_2.LIQUIDITY_STATE_LAYOUT_V4.decode(account.data);
                    marketId = info.marketId;
                    return [4 /*yield*/, connection.getAccountInfo(marketId)];
                case 2:
                    marketAccount = _a.sent();
                    if (marketAccount === null)
                        throw Error(' get market info error');
                    marketInfo = raydium_sdk_2.MARKET_STATE_LAYOUT_V3.decode(marketAccount.data);
                    lpMint = info.lpMint;
                    return [4 /*yield*/, connection.getAccountInfo(lpMint)];
                case 3:
                    lpMintAccount = _a.sent();
                    if (lpMintAccount === null)
                        throw Error(' get lp mint info error');
                    lpMintInfo = raydium_sdk_2.SPL_MINT_LAYOUT.decode(lpMintAccount.data);
                    return [2 /*return*/, {
                            id: id,
                            baseMint: info.baseMint.toString(),
                            quoteMint: info.quoteMint.toString(),
                            lpMint: info.lpMint.toString(),
                            baseDecimals: info.baseDecimal.toNumber(),
                            quoteDecimals: info.quoteDecimal.toNumber(),
                            lpDecimals: lpMintInfo.decimals,
                            version: 4,
                            programId: account.owner.toString(),
                            authority: raydium_sdk_1.Liquidity.getAssociatedAuthority({ programId: account.owner }).publicKey.toString(),
                            openOrders: info.openOrders.toString(),
                            targetOrders: info.targetOrders.toString(),
                            baseVault: info.baseVault.toString(),
                            quoteVault: info.quoteVault.toString(),
                            withdrawQueue: info.withdrawQueue.toString(),
                            lpVault: info.lpVault.toString(),
                            marketVersion: 3,
                            marketProgramId: info.marketProgramId.toString(),
                            marketId: info.marketId.toString(),
                            marketAuthority: raydium_sdk_2.Market.getAssociatedAuthority({ programId: info.marketProgramId, marketId: info.marketId }).publicKey.toString(),
                            marketBaseVault: marketInfo.baseVault.toString(),
                            marketQuoteVault: marketInfo.quoteVault.toString(),
                            marketBids: marketInfo.bids.toString(),
                            marketAsks: marketInfo.asks.toString(),
                            marketEventQueue: marketInfo.eventQueue.toString(),
                            lookupTableAccount: web3_js_1.PublicKey.default.toString()
                        }];
            }
        });
    });
}
