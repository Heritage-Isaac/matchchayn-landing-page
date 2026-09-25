const fs = require('fs');
const https = require('https');
const sharp = require('sharp');
const path = require('path');

const icons = {
  twitter: 'ri:twitter-x-fill',
  instagram: 'mdi:instagram',
  linkedin: 'mdi:linkedin',
  telegram: 'ic:baseline-telegram',
  tiktok: 'ic:baseline-tiktok',
  youtube: 'mdi:youtube',
  facebook: 'mdi:facebook'
};

const dir = 'src/emails/static';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function processIcons() {
  for (const [name, icon] of Object.entries(icons)) {
    const url = `https://api.iconify.design/${icon.replace(':', '/')}.svg?color=%237c3aed`;
    await new Promise((resolve, reject) => {
      https.get(url, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', async () => {
          try {
            await sharp(Buffer.from(data))
              .resize(24, 24)
              .png()
              .toFile(path.join(dir, `${name}.png`));
            console.log(`Saved ${name}.png`);
            resolve();
          } catch (e) {
            console.error(`Failed ${name}`, e);
            resolve();
          }
        });
      }).on('error', resolve);
    });
  }
}
processIcons();
