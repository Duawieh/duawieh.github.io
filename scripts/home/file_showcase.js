function loadFile() {
    // fetch('../../contents/home/showcase1/title.txt')
    fetch('./contents/home/showcase1/title.txt')
      .then(response => response.text())
      .then(data => {
        document.getElementById('homepageCenterShowcaseTitle_Title').textContent = data;
      })
      .catch(error => {
        console.log('读取文件出错：', error);
      });
}