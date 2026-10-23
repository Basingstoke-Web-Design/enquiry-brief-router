import {clean,lines,selected,requireText,number,pence,pounds,section,report,enumValue,webAddress} from './customer-ui.js';
export const config = {
  "title": "Website Enquiry Form Planner",
  "short": "Ask the right questions. Get better enquiries.",
  "audience": "For Basingstoke small businesses",
  "summary": "Work out what your website needs to ask, what can wait and how your team will respond.",
  "button": "Plan my enquiry form",
  "filename": "website-enquiry-form-plan",
  "eyebrow": "A useful enquiry starts with a useful form.",
  "time": "About 4 minutes",
  "outcome": "A short form specification and a response plan to share with your designer.",
  "layout": "enquiry",
  "intro": "Plan the form your customers will use. You are not submitting a real enquiry here, so do not enter customer information.",
  "note": "This plans fields and follow-up. It does not build, send or store a working enquiry form.",
  "fields": [
    {
      "id": "business",
      "label": "Business or service type",
      "help": "For example: Commercial cleaning company.",
      "required": true,
      "type": "text",
      "maxLength": 180
    },
    {
      "id": "goal",
      "label": "What should the form help someone request?",
      "options": [
        "A quote",
        "A callback",
        "An appointment enquiry",
        "General help"
      ],
      "help": "",
      "required": true,
      "type": "select"
    },
    {
      "id": "facts",
      "label": "Which facts are needed to route the first enquiry?",
      "options": [
        "Service needed",
        "General area or postcode",
        "Preferred timing",
        "Approximate scope",
        "Budget range"
      ],
      "help": "",
      "type": "checks",
      "wide": true
    },
    {
      "id": "reply",
      "label": "What contact detail does the team need?",
      "options": [
        [
          "email",
          "Email address"
        ],
        [
          "phone",
          "Phone number"
        ],
        [
          "choice",
          "Either email or phone, chosen by the customer"
        ]
      ],
      "help": "",
      "required": true,
      "type": "select"
    },
    {
      "id": "later",
      "label": "What can you ask for after the initial enquiry?",
      "help": "For example: photographs, full site address or detailed documents.",
      "required": false,
      "type": "textarea",
      "maxLength": 2500,
      "wide": true
    },
    {
      "id": "owner",
      "label": "Who checks new enquiries?",
      "help": "Use a team or role, not a customer’s details.",
      "required": true,
      "type": "text",
      "maxLength": 180
    },
    {
      "id": "response",
      "label": "What response time can you actually maintain?",
      "help": "Optional. Use a realistic arrangement, not an invented promise.",
      "required": false,
      "type": "text",
      "maxLength": 180
    }
  ],
  "example": {
    "business": "Commercial cleaning company",
    "goal": "A quote",
    "facts": [
      "Service needed",
      "General area or postcode",
      "Approximate scope"
    ],
    "reply": "choice",
    "later": "Photographs\nDetailed site information",
    "owner": "Office team",
    "response": "During the next working day, subject to opening hours."
  }
};
export function evaluate(v){enumValue(v.reply,['email','phone','choice'],'the reply method');const contact={email:'Email address',phone:'Phone number',choice:'Preferred reply method, then the email address or phone number the customer chooses'}[v.reply];return report(requireText(v.business,'your business or service type')+': enquiry form plan','Keep the first step short enough to complete on a phone.',[section('The form’s job',[requireText(v.goal,'what the form should request')]),section('Suggested initial fields',['Name',contact,...selected(v.facts),'Short description of what help is needed']),section('Ask later',lines(v.later).length?lines(v.later):['Ask for detailed documents, sensitive information or a full brief through your agreed follow-up process.']),section('After someone sends the form',['Responsible team: '+requireText(v.owner,'who checks enquiries'),clean(v.response)?'Confirmed response arrangement: '+clean(v.response):'Agree a realistic response arrangement before stating one on the website.','Show a clear confirmation explaining what happens next.','Make required fields obvious, explain errors and test successful delivery to the team.','Provide a suitable privacy notice and decide what the business will retain.'])]);}
