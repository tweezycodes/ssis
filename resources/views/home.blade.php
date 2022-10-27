<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])

    </head>
    <body class="antialiased">
        @auth
            <div id="app"></div>
        @else
            
        @endauth
    </body>
</html>