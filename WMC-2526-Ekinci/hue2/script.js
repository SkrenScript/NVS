function holeBrief(inhalt) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(inhalt);
        }, 1000);
    });
}

function stempelBrief(brief) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(brief + " [Gestempelt]");
        }, 1000);
    });
}

function versendeBrief(brief) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(brief + " -> Versendet!");
        }, 1000);
    });
}

holeBrief("Hallo Welt")
    .then(brief => {
        console.log("Brief geholt:", brief);
        return stempelBrief(brief);
    })
    .then(brief => {
        console.log("Brief gestempelt:", brief);
        return versendeBrief(brief);
    })
    .then(brief => {
        console.log("Brief versendet:", brief);
    });
