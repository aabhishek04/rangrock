<?php
namespace App\Controller;

use Cake\Event\Event;
use Cake\Core\Configure;
use Cake\View\Helper;
use App\Controller\AppController;
use Cake\ORM\TableRegistry;
use Cake\View\View;

class AsetController extends AppController {

    public function initialize() {

        parent::initialize();
    }
    public function aset(){
        
    }
    public function beforeRender(Event $event) {

        parent::beforeFilter($event);

        $this->viewBuilder()->theme('Demo');
    }
}