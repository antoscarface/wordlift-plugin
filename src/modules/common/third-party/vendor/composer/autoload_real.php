<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitd05971701cc74d0674a54aff7c5bdf47
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Wordlift_Modules_Common_Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Wordlift_Modules_Common_Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitd05971701cc74d0674a54aff7c5bdf47', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Wordlift_Modules_Common_Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitd05971701cc74d0674a54aff7c5bdf47', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Wordlift_Modules_Common_Composer\Autoload\ComposerStaticInitd05971701cc74d0674a54aff7c5bdf47::getInitializer($loader));

        $loader->setClassMapAuthoritative(true);
        $loader->register(true);

        return $loader;
    }
}
