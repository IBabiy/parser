// Parser Shazam
const { Builder, By, Key, util } = require('selenium-webdriver');
async function pars() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.shazam.com/ru/charts/top-200/world');

        driver.sleep(20000).then(async function() {
            for (let i = 1; i < 51; i++) {
                var TrackName = await (await driver.findElement(By.xpath(`/html/body/div[3]/div/main/div/div[3]/div[1]/div/ul/li[${i}]/article/div/div[2]/div/div[1]`))).getText();
                var ArtistName = await (await driver.findElement(By.xpath(`/html/body/div[3]/div/main/div/div[3]/div[1]/div/ul/li[${i}]/article/div/div[2]/div/div[2]`))).getText();

                console.log(TrackName);
                console.log(ArtistName);
                console.log('\n\n');
            }
            driver.quit();
        });

    } 
    
    catch {
        console.log('Помилка...');
        driver.quit();
    }
}
pars();