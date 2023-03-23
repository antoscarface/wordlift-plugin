<?php

// autoload_static.php @generated by Composer

namespace Wordlift_Modules_Common_Composer\Autoload;

class ComposerStaticInit8bd2b6d4ccd6b50e0809e5ba62169420
{
    public static $classMap = array (
        'ComposerAutoloaderInit8bd2b6d4ccd6b50e0809e5ba62169420' => __DIR__ . '/..' . '/composer/autoload_real.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'Wordlift\\Modules\\Common\\Date_Utils' => __DIR__ . '/../..' . '/Date_Utils.php',
        'Wordlift\\Modules\\Common\\Installer' => __DIR__ . '/../..' . '/Installer.php',
        'Wordlift\\Modules\\Common\\Plugin' => __DIR__ . '/../..' . '/Plugin.php',
        'Wordlift\\Modules\\Common\\Quiet_Skin' => __DIR__ . '/../..' . '/Quiet_Skin.php',
        'Wordlift\\Modules\\Common\\Remote_Plugin' => __DIR__ . '/../..' . '/Remote_Plugin.php',
        'Wordlift\\Modules\\Common\\Synchronization\\Runner' => __DIR__ . '/../..' . '/Synchronization/Runner.php',
        'Wordlift\\Modules\\Common\\Synchronization\\Runner_State' => __DIR__ . '/../..' . '/Synchronization/Runner_State.php',
        'Wordlift\\Modules\\Common\\Synchronization\\Store' => __DIR__ . '/../..' . '/Synchronization/Store.php',
        'Wordlift_Modules_Common_Composer\\Autoload\\ClassLoader' => __DIR__ . '/..' . '/composer/ClassLoader.php',
        'Wordlift_Modules_Common_Composer\\Autoload\\ComposerStaticInit8bd2b6d4ccd6b50e0809e5ba62169420' => __DIR__ . '/..' . '/composer/autoload_static.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit8bd2b6d4ccd6b50e0809e5ba62169420::$classMap;

        }, null, ClassLoader::class);
    }
}
