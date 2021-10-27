/**
 * @description 全站共用ENUM
 */
const ENUM_COMMON = {
    // 這個列舉詳情參考 ENUM_GIFTBOX，
    // open?pgid=45 蠻多地方用到，到時後應該以此份列舉延用
    // 刪除 ENUM_GIFTBOX 底下 UrlScheme 的列舉
    // UrlScheme EXCEL https://reurl.cc/nzeMp8
    MOBILE: { 
        OTHER_POST: "etmall://open?pgid=43&url=",        // POST
        OTHER_EXTRA: "etmall://open?pgid=44&url=",       // 外網
        OTHER_BROWSER: "etmall://open?pgid=45&url="      // 瀏覽器
    },
    GA_DIMENSION: {
        DEPT_CATEGORY_NAME: "dimension1",                // 館分類名稱
        L_CATEGORY_NAME: "dimension2",                   // 大分類名稱
        M_CATEGORY_NAME: "dimension3",                   // 中分類名稱
        S_CATEGORY_NAME: "dimension4",                   // 小分類名稱
        DEPT_CATEGORY_ID: "dimension5",                  // 館 ID
        L_CATEGORY_ID: "dimension6",                     // 大分類 ID
        M_CATEGORY_ID: "dimension7",                     // 中分類 ID
        S_CATEGORY_ID: "dimension8",                     // 小分類 ID
        PRODUCT_NAME: "dimension9",                      // 商品名稱
        PRODUCT_ID: "dimension10",                       // 商品銷編
        VIDEO_NAME: "dimension11",                       // 賣場影片名稱
        HAS_SEARCH_RESULT: "dimension12",                // SRP使用，看使用者的搜尋是否有結果
        IS_STRAWBERRY_CART: "dimension13",               // 購物車區分草莓網商品使用
        EEC_PRODUCT_NAME: "dimension17",                 // GA EEC導RS(Real Shopper)，帶入商品名稱
        EEC_PRODUCT_ID: "dimension18",                   // GA EEC導RS(Real Shopper)，帶入商品銷編
        EEC_CURRENT_PAGE: "dimension20",                 // GA EEC導RS(Real Shopper)，帶入所在頁面
        EEC_ORDER_PRICE: "dimension21",                  // GA EEC導RS(Real Shopper)，帶入訂單金額
        VESPA_AB_TEST: "dimension23",                    // Vespa A/B Test使用
        EEC_PAYMENT_METHOD: "dimension24",               // GA EEC，帶入使用者的付款方式。#21574
    },
    SHARE_APP: {
        LINE: "line",
        FACEBOOK: "facebook"
    }
}