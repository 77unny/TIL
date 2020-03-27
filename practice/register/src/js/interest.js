
const tags = [];


export function addInterestss(key, tagUiWrap, signupInterests) {
    if (key !== ',') return;
    const interest = key.replace(/[,]/g, '');
    tags.push(interest);
    key.value = '';
    if (!interest) return;
    console.log(interest);
    return updateTag(tagUiWrap);
}

export function removeInterests({ key }, tagUiWrap, signupInterests) {
    if (!checkRemoveCondition(key, signupInterests)) return;
    signupInterests.value = tags.pop() + ' ';
    return updateTag(tagUiWrap);
}

function checkRemoveCondition(key, signupInterests) {
    if (tags.length > 0 && signupInterests.value === '' && (key === 'Backspace' || key === 'Delete')) return true;
    return false;
}

export function removeInterestsOnClick({ target }, tagUiWrap) {
    if (!target.classList.contains('tag-ui-close')) return;
    const data = target.getAttribute('data-item');
    const index = tags.indexOf(data);
    tags.splice(index, 1);
    return updateTag(tagUiWrap);
}

export function resetTag() {
    document.querySelector('.tag-ui').forEach(tag => tag.parentElement.removeChild(tag));
}

function checkInterests() {
    signupData.interest = null;
    if (tags.length < FORM_RULES.INTERESTS_MIN) return STATE_MESSAGE.INVALID.INTERESTS;
    signupData.interest = tags;
    return STATE_MESSAGE.VALID.DEFALUT;
}

function createTag(interest) {
    const tag = document.createElement('span');
    tag.setAttribute('class', 'tag-ui');
    tag.innerHTML = `${interest}<span class="tag-ui-close" data-item="${interest}">✖</span>`;
    return tag;
}

function updateTag(tagUiWrap) {
    resetTag();
    tags.slice().reverse().forEach(tag => tagUiWrap.prepend(createTag(tag)));
    return checkInterests();
}