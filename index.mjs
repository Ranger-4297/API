import { writeFileSync } from 'fs';
import { createCanvas, loadImage } from 'canvas';
import express from 'express';

const app = express();
const PORT = 8080;

app.get('/welcome', async (req, res) => {
    const canvas = createCanvas(990, 450);
    const ctx = canvas.getContext('2d');

    // Background
    const background = await loadImage('https://media.discordapp.net/attachments/913966196758564874/1058121547224731769/image.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const avatar = await loadImage('https://cdn.discordapp.com/avatars/765316548516380732/1ee9def1c460ef2e28f7572e4491dab4.png?size=256');

    ctx.scale(2, 2)
    ctx.beginPath();
    ctx.arc(canvas.width / 4, canvas.height / 5.5, 60, 0, 2 * Math.PI);
    ctx.lineWidth = 7;
    ctx.stroke();

    ctx.save();
    ctx.beginPath();
    ctx.arc(canvas.width / 4, canvas.height / 5.5, 60, 0, 2 * Math.PI);
    ctx.clip();
    ctx.drawImage(avatar, canvas.width / 4 - 60, canvas.height / 5.5 - 60, 128, 128);
    
    // Output
    const buffer = canvas.toBuffer('image/png')
    writeFileSync('./output/output.png', buffer)

    res.set({ 'Content-Type': 'image/png' })//setting content type as png image!
    res.send(canvas.toBuffer())//sending the image!
})
app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)