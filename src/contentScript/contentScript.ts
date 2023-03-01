window.onload = () => {
  const body = document.querySelector('body');
  const button = document.getElementsByClassName(
    'artdeco-button artdeco-button--2 artdeco-button--secondary ember-view'
  );

  setInterval(() => {
    const firstCall = setTimeout(() => {
      firstRequest();
    }, 4000);
  }, 10000);

  const firstRequest = () => {
    const btnCollection = document.querySelectorAll('button');

    const arr = Array.from(btnCollection);

    const arra = arr.map((item) => {
      const it = item.querySelector('span');
      if (it !== null) {
        if (it.innerText === 'Connect') {
          console.log(item);
          item.focus();
          item.click();
          sendHandler();
        }
      }
    });
  };

  const sendHandler = () => {
    const newBtn = document.querySelectorAll('button');
    const sendBtn = Array.from(newBtn);
    sendBtn.map((li) => {
      const newIt = li.querySelector('span');

      if (newIt !== null) {
        if (newIt.innerText === 'Send') {
          li.click();
        }
      }
    });
  };
};
