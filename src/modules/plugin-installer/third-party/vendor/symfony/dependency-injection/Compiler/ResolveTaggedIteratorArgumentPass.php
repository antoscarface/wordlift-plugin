<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace Wordlift\Modules\Plugin_Installer_Dependencies\Symfony\Component\DependencyInjection\Compiler;

use Wordlift\Modules\Plugin_Installer_Dependencies\Symfony\Component\DependencyInjection\Argument\TaggedIteratorArgument;
/**
 * Resolves all TaggedIteratorArgument arguments.
 *
 * @author Roland Franssen <franssen.roland@gmail.com>
 */
class ResolveTaggedIteratorArgumentPass extends AbstractRecursivePass
{
    use PriorityTaggedServiceTrait;
    /**
     * {@inheritdoc}
     */
    protected function processValue($value, $isRoot = \false)
    {
        if (!$value instanceof TaggedIteratorArgument) {
            return parent::processValue($value, $isRoot);
        }
        $value->setValues($this->findAndSortTaggedServices($value->getTag(), $this->container));
        return $value;
    }
}
