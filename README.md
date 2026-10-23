# Website Enquiry Form Planner

Work out what your website needs to ask, what can wait and how your team will respond.

**For Basingstoke small businesses. No coding knowledge needed.**

[Open the free tool](https://basingstoke-web-design.github.io/enquiry-brief-router/) · [See a fictional worked example](https://basingstoke-web-design.github.io/enquiry-brief-router/examples/customer-output.html)

![Desktop preview](docs/preview.png)

## How to use it

1. Open the tool in your browser. No installation or account is needed.
2. Use your own business details in the labelled fields, or choose **Try a fictional example**.
3. Choose **Plan my enquiry form** and review the result.
4. Adjust your answers, then copy the result, download a text file or choose **Print / Save PDF**.

A short form specification and a response plan to share with your designer.

## What to expect

Plan the form your customers will use. You are not submitting a real enquiry here, so do not enter customer information.

This plans fields and follow-up. It does not build, send or store a working enquiry form.

Your answers are processed in the browser tab. They are not uploaded, emailed or saved by the tool. Refreshing or closing the tab clears them. Save your result before leaving. GitHub provides hosting and handles normal request logs. Example details are fictional, not customer results.

## Design and maintenance

The interface uses the colours, typography and visual treatment of [Basingstoke Web Design](https://basingstokewebdesign.uk/). The tool is maintained by Basingstoke Web Design, operated by JW Digital Services Ltd. The commercial website is a separate project.

## For developers

The customer tool uses native HTML controls and small browser modules, with no runtime framework. Its planning or calculation rules are in `src/customer.js`; presentation helpers are in `src/customer-ui.js`.

```sh
npm ci --ignore-scripts
npm test
npm run build
npm run serve
```

Open the local address printed by the server. `npm run build:pages` prepares the static GitHub Pages artifact. Tests cover the customer rules and output escaping.

The original v0.1 developer helpers remain in `src/index.js` for compatibility, with their original examples. They are not needed to use the customer tool. The existing repository name and Pages URL are retained so earlier links keep working.

## Licence and feedback

MIT for tool code. Bundled typefaces retain their original licence notices in `demo/assets/font-licences`. [Ideas and feedback](https://github.com/Basingstoke-Web-Design/enquiry-brief-router/discussions/1).
