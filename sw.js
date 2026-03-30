self.addEventListener('fetch', function(event) {
  // Este código permite que la app funcione como PWA
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});
```

### 2. Registrar el Service Worker en tu `index.html`
Debes decirle a tu página que use ese archivo. Ve a tu `index.html`, baja hasta el final (antes de cerrar la etiqueta `</body>`) y pega este bloque de código:

```html
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js').then(function(registration) {
        console.log('ServiceWorker registrado con éxito');
      }, function(err) {
        console.log('Error al registrar ServiceWorker', err);
      });
    });
  }
</script>
```

### 3. El toque final del Favicon
Para que también se vea en la pestaña del navegador (que es lo que me preguntabas antes), añade esta línea dentro del `<head>` de tu `index.html`:

```html
<link rel="icon" type="image/png" href="icon.png">