const btn = document.querySelector('#submit');
const complain = document.querySelector('#complain');
const form = document.getElementById('form');
complain.onclick = (e) => {
    complain.classList.add('actve');
}
form.onsubmit = (e) => {
    e.preventDefault();
    const hc = document.createElement('h3');
    const hp = document.createElement('p');

    hp.textContent = complain.value;
    hc.id = 'name';
    hc.textContent = 'Anonymous';
    const spann = document.createElement('span');
    spann.textContent = 'Posted';
    hc.appendChild(spann);
    const divv = document.createElement('div');
    divv.className = 'blog';
    divv.appendChild(hc);
    divv.appendChild(hp);
    const blogSec = document.querySelector('#blogs');
    if (hp.textContent != '') {
        blogSec.appendChild(divv);
        complain.value = '';
        var changes = em.getChanges();
        window.localStorage.setItem("todos", changesExport);

        var changesImport = window.localStorage.getItem("todos");
        // em.importEntities(changesImport);
    }

}

function saveChanges() {
    if (manager.hasChanges()) {
        manager.saveChanges()
            .then(saveSucceeded)
            .catch(saveFailed);
    } else {
        logger.info("Nothing to save");
    };
};