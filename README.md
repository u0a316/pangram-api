# pangram-api x http shortcut

(1).  isValid(PangramAPI()); // Nama pintasan
```sh
showWindow({
  title: 'informations',
  text: [
    `id: ${shortcut.id}`,
    `name: ${shortcut.name}`,
    `desc: ${shortcut.description}`,
    `visible: ${shortcut.hidden}`,
    `scid: ${shortcut.category.id}`,
    `scname: ${shortcut.category.name}`
  ].join("\n"),
  fontSize: 24,
  monospace: true,
});

const recognizeArePangram = 'abcdefghijklmnopqrstuvwxyz'.split("");

const isPangram = (string) => {
    string = string.toLowerCase();   
    return recognizeArePangram.every(x => string.includes(x)) 
        ? "Got it, that correct!" + string
        : "It's not a Pangram sentence";
};

enqueueShortcut("PangramAPI()");
// executeShortcut("PangramAPI()");

const result = isPangram(getVariable("output"))
shareText(result);


```

(2).
```sh
jjk
```

