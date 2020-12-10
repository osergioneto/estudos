import * as puppeteer from "puppeteer";

export async function getTariff(url: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const html = await page.$eval(".tarifas-2-2-2", node => node.innerHTML);
  await browser.close();

  return html.toString().trim();
}