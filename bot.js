const bedrock = require("bedrock-protocol");

const bot = bedrock.createClient({
  host: "Ananthakaavu.aternos.me",
  port: 18136,
  username: "HackerBot",
  offline: false
});

bot.on("join", () => {
  console.log("Connected to server");
});

bot.on("spawn", () => {
  console.log("Spawned in world");
});

bot.on("text", (packet) => {
  const msg = packet.message || "";
  console.log("Chat:", msg);

  if (msg.toLowerCase().includes("hello")) {
    bot.queue("text", {
      type: "chat",
      needs_translation: false,
      source_name: bot.username,
      message: "Hi there!"
    });
  }
});

bot.on("disconnect", (packet) => {
  console.log("Disconnected:", packet);
});

bot.on("error", (err) => {
  console.log("Error:", err.message);
});