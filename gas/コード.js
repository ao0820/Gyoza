/**
 * 注文・食券購入情報の受け取り、スプレッドシート記録、メール送信
 */
function doPost(e) {
    try {
        var data = JSON.parse(e.postData.contents);
        var type = data.type;
        var name = data.name;
        var email = data.email;
        var paymentMethod = data.paymentMethod;
        var timestamp = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });

        if (!email) {
            throw new Error("メールアドレスが必要です");
        }

        var body = "";
        var subject = "";

        // 注文か食券購入かで処理を分岐
        if (type === "ticket_purchase") {
            // === 食券購入の場合 ===
            var plan = data.plan;
            var quantity = data.quantity;
            var totalAmount = data.totalAmount;
            var totalTickets = data.totalTickets;
            var phone = data.phone;

            // スプレッドシートに記録
            var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ticket_purchases');
            if (sheet) {
                sheet.appendRow([
                    timestamp,
                    name,
                    email,
                    phone,
                    plan,
                    quantity,
                    totalTickets,
                    totalAmount,
                    paymentMethod,
                    '未対応'
                ]);
            }

            // メール本文作成
            subject = "【餃子フェスティバル】食券購入承りました";
            body = name + " 様\n\n" +
                "この度は「餃子フェスティバル 2026」の食券をご購入いただき、ありがとうございます。\n" +
                "以下の内容で購入を承りました。\n\n" +
                "■購入内容\n" +
                "・食券プラン: " + plan + "\n" +
                "・購入数量: " + quantity + "セット\n" +
                "・食券合計: " + totalTickets + "枚\n" +
                "・お支払い金額: ¥" + totalAmount.toLocaleString() + "\n" +
                "・支払い方法: " + paymentMethod + "\n\n" +
                "当日は会場の「受付カウンター」にてこのメールをご提示いただき、\n" +
                "食券をお受け取りください。\n\n" +
                "スタッフ一同、会場でお会いできるのを楽しみにしております！\n\n" +
                "--------------------------------------------------\n" +
                "餃子フェスティバル 2026 実行委員会\n" +
                "--------------------------------------------------";

        } else {
            // === 注文の場合 ===
            var orders = data.orders;
            var totalPrice = data.totalPrice;

            // 注文内容を文字列にまとめる
            var orderList = orders.map(function (item) {
                return "・" + item.name + " × " + item.quantity;
            }).join("\n");

            // 注文内容を「名前」と「数量」で分けてまとめる
            var namesStr = orders.map(function (item) {
                return item.name;
            }).join('\n');

            var quantitiesStr = orders.map(function (item) {
                return item.quantity;
            }).join('\n');

            // スプレッドシートに記録
            var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('orders');
            if (sheet) {
                sheet.appendRow([
                    timestamp,
                    name,
                    email,
                    namesStr,      // 餃子名のみ
                    quantitiesStr, // 数量のみ
                    totalPrice,
                    paymentMethod,
                    '未対応'
                ]);
            }

            // メール本文作成
            subject = "【餃子フェスティバル】ご予約承りました";
            body = name + " 様\n\n" +
                "この度は「餃子フェスティバル 2026」へのご予約ありがとうございます。\n" +
                "以下の内容で予約を承りました。\n\n" +
                "■予約内容\n" +
                orderList + "\n\n" +
                "■お支払い情報\n" +
                "・合計金額: ¥" + totalPrice.toLocaleString() + "\n" +
                "・支払い方法: " + paymentMethod + "\n\n" +
                "当日は会場の「予約専用カウンター」までお越しください。\n" +
                "スタッフ一同、会場でお会いできるのを楽しみにしております！\n\n" +
                "--------------------------------------------------\n" +
                "餃子フェスティバル 2026 実行委員会\n" +
                "--------------------------------------------------";
        }

        // Gmailで送信
        GmailApp.sendEmail(email, subject, body);

        // 成功したことをNext.jsに返す
        return ContentService.createTextOutput(
            JSON.stringify({ status: "success", message: "メール送信とスプレッドシート記録が完了しました" })
        ).setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        // エラーが発生したことをNext.jsに返す
        return ContentService.createTextOutput(
            JSON.stringify({ status: "error", message: error.toString() })
        ).setMimeType(ContentService.MimeType.JSON);
    }
}
