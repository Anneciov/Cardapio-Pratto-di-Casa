// App do sistema Pratto di Casa: só permite instalar e abrir como aplicativo.
// Não guarda nada em cache (o sistema sempre busca a versão mais nova na internet).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sem internet</title>' +
    '<body style="margin:0;height:100vh;display:grid;place-items:center;background:#011c2e;color:#e6fafc;font-family:system-ui,sans-serif;text-align:center;padding:16px">' +
    '<div><h2 style="margin:0 0 8px">Sem internet</h2><p style="opacity:.8;margin:0 0 16px">O sistema precisa de internet. Verifique a conexão.</p>' +
    '<button onclick="location.reload()" style="border:0;border-radius:10px;padding:10px 18px;background:#26658C;color:#fff;font-weight:700;cursor:pointer">Tentar de novo</button></div></body></html>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
