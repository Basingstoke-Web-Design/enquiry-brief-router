# Enquiry Brief Router

Enquiry Brief Router helps a small service business ask a few relevant questions before a customer gets in touch. The customer can review the answers, copy a brief or open an email draft.

The reference does not send messages or store enquiries. Sending and storage need a separately configured service. Maintained by [Basingstoke Web Design](https://basingstokewebdesign.uk/), operated by JW Digital Services Ltd.

![Complete example](docs/preview.png)

## Start locally

Requires Node.js 22 or later. No runtime dependencies or account required.

```sh
npm ci
npm test
npm run build
npm run serve
```

Open http://127.0.0.1:4173/ for the complete local demonstration. Browser examples do not upload or persist entered data. The optional development server binds to loopback only.

## Input and output

Supply business, selectedService, routes [{id,label,questions:[{id,label,required}]}] and answers (object). Only answers for the active route enter the brief. There is no preconfigured recipient, submission endpoint or storage.

Use [examples/input.json](examples/input.json) as the complete input contract. Compare the generated [JSON result](examples/output.json), [Markdown report](examples/output.md) and [complete HTML](examples/output.html). The demo is in [demo/index.html](demo/index.html). It needs the local server for JavaScript modules. HTML reports can be opened as standalone files.

```sh
node cli.mjs examples/input.json --format json
node cli.mjs examples/input.json --format html --output report.html
node cli.mjs examples/input.json --format md --output report.md
```

This resource uses nested JSON input. See the complete example and `node cli.mjs --help`.

## Worked example

Use a fictional local sign-making business with branches for a shop sign, vehicle lettering and an update to existing artwork. A vehicle enquiry asks how many vehicles; a shop-sign enquiry asks where it will be installed. Switching branches clears inactive answers from the final brief rather than leaking earlier information into it.

All supplied example records are synthetic. No clients, outcomes, current professional advice or real service availability are represented by them. Keep real records private and review output before sharing it.

## Checks

- Each branch shows and validates only its active questions. Switching branches removes inactive data from every output.
- Back navigation preserves valid active answers. Required questions have clear errors and focus moves usefully to them.
- Email bodies are encoded correctly, including ampersands, apostrophes and line breaks. Overlong drafts offer a copy fallback.
- Screen-reader labels, keyboard operation, 320 px layout and JavaScript-disabled behaviour are checked.
- Inspect the network log and browser storage to confirm no enquiry data is transmitted or retained by the demo. No actual message is sent in tests.

The automated results and browser checks performed for this release are recorded in [verification.md](docs/verification.md). Manual screen-reader testing has not been performed. A passing automated check is not accessibility certification.

## Contribute and maintain

Use [Issues](https://github.com/Basingstoke-Web-Design/enquiry-brief-router/issues) for a reproducible bug and [Discussions](https://github.com/Basingstoke-Web-Design/enquiry-brief-router/discussions) for questions and improvements. Follow [CONTRIBUTING.md](CONTRIBUTING.md); report vulnerabilities privately using [SECURITY.md](SECURITY.md). See [CHANGELOG.md](CHANGELOG.md) for releases. Maintenance is best effort.

Code, original illustrations and synthetic fixtures are MIT licensed. There is no required website backlink when reusing the resource. Commercial brand assets and third-party material are not included.
