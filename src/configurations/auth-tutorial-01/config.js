export const config = {
  "title": "React Django Docker Auth Tutorial Part 01",
  "style": {
    "maxImageWidth": "200px"
  },
  "elements": [
    {
      "type": "image",
      "url": "https://res.cloudinary.com/dmh4ucizb/image/upload/v1524750169/auth-tutorial-01/01-cli-inputs.png",
    },
    {
      "type": "image",
      "url": "https://res.cloudinary.com/dmh4ucizb/image/upload/v1524698257/auth-tutorial-01/02.png",
    },
    {"type": "headline", "size": 1, "text": "Prerequisites", "linksTo": null},
    {
      "type": "image",
      "url": "https://res.cloudinary.com/dmh4ucizb/image/upload/v1524698257/auth-tutorial-01/03-gear.png",
    },
    {
      "type": "headline",
      "size": 1,
      "text": "Cookie Cutter",
    },
    {"type": "headline", "size": 3, "text": "Commands", "linksTo": null},
    {
      "type": "text",
      "text": "We will be using {{0}} to quickstart our application.  The cookie cutter was created by {{1}}, co-author of {{2}}.  This tool provides a command line interface for bootstrapping an application.  After answering a series of questions in the command line, we’ll have a django application running in a docker container, complete with pycharm run configurations.   The full documentation for the cookie cutter can be found {{3}}.",
      "embeddedLinks": [
        {
          "id": 0,
          "display": "cookiecutter-django",
          "linksTo": "https://github.com/pydanny/cookiecutter-django"
        },
        {
          "id": 1,
          "display": "Daniel Roy Greenfield",
          "linksTo": "https://github.com/pydanny"
        },
        {
          "id": 2,
          "display": "Two Scoops of Django 1.11",
          "linksTo": "https://twoscoopspress.com/products/two-scoops-of-django-1-11"
        },
        {
          "id": 3,
          "display": "here",
          "linksTo": "http://cookiecutter-django.readthedocs.io/en/latest/index.html"
        },
      ]
    },
    {
      "type": "list",
      "isOrdered": true,
      "listItems": [
        {"text": "Set method to POST", "embeddedLinks": []},
        {"text": "Enter the url http://localhost:8000/api-token-auth/", "embeddedLinks": []},
        {"text": "Click the headers tab.", "embeddedLinks": []},
        {"text": "Add header: Content-Type: application/json", "embeddedLinks": []},
        {"text": "Go to Body tab", "embeddedLinks": []},
        {"text": "Click raw", "embeddedLinks": []},
        {"text": `Enter payload { “username”: “<your-username>”, “password: “<your-password>” }`, "embeddedLinks": []},
        {"text": "Success Response", "embeddedLinks": []},
        {"text": "Change the password to something incorrect", "embeddedLinks": []},
        {"text": "Note the error response", "embeddedLinks": []},
      ]
    },
  ]
};