const POLL_INTERVAL = 16;
/**
 * Programmatically open the docsearch modal
 */
export const pollToOpenDocsearch = () => {
    if (document.querySelector('.DocSearch-Modal'))
        return;
    const e = new Event('keydown');
    e.key = 'k';
    e.metaKey = true;
    window.dispatchEvent(e);
    setTimeout(pollToOpenDocsearch, POLL_INTERVAL);
};
