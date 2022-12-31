import { writeFileSync } from 'fs';
import { createCanvas, loadImage } from 'canvas';
import express from 'express';

const app = express();
const PORT = 80;

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: '.' });
});

app.get('/welcome', async (req, res) => {
    const canvas = createCanvas(990, 450);
    const ctx = canvas.getContext('2d');

    // Background
    const background = await loadImage(req.query.background);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


    // Username 
    ctx.font = "30px Arial";
    ctx.textAlign = 'center';
    ctx.fillText(req.query.username, canvas.width / 2, canvas.height - 120);

    // Membercount
    ctx.font = "30px Arial";
    ctx.textAlign = 'center';
    ctx.fillText(req.query.text, canvas.width / 2, canvas.height - 70);

    // Border
    ctx.scale(2, 2)
    ctx.beginPath();
    ctx.arc(canvas.width / 4, canvas.height / 6.5, 60, 0, 2 * Math.PI);
    ctx.lineWidth = 7;
    ctx.stroke();

    // Avatar
    const avatar = await loadImage(req.query.avatar);
    ctx.save();
    ctx.beginPath();
    ctx.arc(canvas.width / 4, canvas.height / 6.5, 60, 0, 2 * Math.PI);
    ctx.clip();
    ctx.drawImage(avatar, canvas.width / 4 - 60, canvas.height / 6.5 - 60, 128, 128);

    // Output
    res.set({ 'Content-Type': 'image/png' })
    res.send(canvas.toBuffer())
})
app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)