<?php

use Daiv\Notify\LaravelNotify;
use PHPUnit\Framework\TestCase;

class NotifyTest extends TestCase
{
    protected $session;

    protected $notify;

    public function setUp(): void
    {
        $this->session = Mockery::spy('Daiv\Notify\Storage\Session');
        $this->notify = new LaravelNotify($this->session);
    }
}
