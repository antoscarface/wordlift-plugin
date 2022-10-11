<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitea9f09a268eac98657b6e4638a5b4856
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'Wordlift\\Modules\\Include_Exclude\\' => 33,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Wordlift\\Modules\\Include_Exclude\\' => 
        array (
            0 => __DIR__ . '/../..' . '/includes',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitea9f09a268eac98657b6e4638a5b4856::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitea9f09a268eac98657b6e4638a5b4856::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitea9f09a268eac98657b6e4638a5b4856::$classMap;

        }, null, ClassLoader::class);
    }
}
