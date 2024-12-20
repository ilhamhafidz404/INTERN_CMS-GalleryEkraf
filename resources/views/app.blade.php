<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        @viteReactRefresh 
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        <!-- As you can see, we will use vite with jsx syntax for React-->
        @inertiaHead
        @include('sweetalert::alert')
    </head>
    <body class="bg-gray-100">
        @inertia
        <script src="https://rawgit.com/basecamp/trix/master/dist/trix.js"></script>
    </body>
</html>