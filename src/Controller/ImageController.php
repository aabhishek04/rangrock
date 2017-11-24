<?php
namespace App\Controller;

use Cake\Event\Event;
use Cake\Core\Configure;
use Cake\View\Helper;
use App\Controller\AppController;
use Cake\ORM\TableRegistry;
use Cake\View\View;

class ImageController extends AppController {

    public function initialize() {

        parent::initialize();
    }
    public function upload(){
        
        $this->image= TableRegistry::get('Users');
            if ($this->request->is('post')) {
                pr($this->request->data);
//                exit;
                if (!empty($this->request->data['image_file']['tmp_name']) && is_uploaded_file($this->request->data['image_file']['tmp_name'])) {
                $path_info = pathinfo($this->request->data['image_file']['name']);
                    chmod($this->request->data['image_file']['tmp_name'], 0644);
                    $filename = time() . "." . $path_info['extension'];
                    $fullpath = WWW_ROOT . "files" . DS . "user_image".DS."Images";
                    if (!is_dir($fullpath)) {
                        mkdir($fullpath, 0777, true);
                        move_uploaded_file($this->request->data['image_file']['tmp_name'], $fullpath . DS . $filename);
                } else {
                       move_uploaded_file($this->request->data['image_file']['tmp_name'], $fullpath . DS . $filename);
                }
            } else {
                $this->Flash->error(__('Please upload Image file'));
            }
        }
        
    }
    public function beforeRender(Event $event) {

        parent::beforeFilter($event);

        $this->viewBuilder()->theme('Demo');
    }
}