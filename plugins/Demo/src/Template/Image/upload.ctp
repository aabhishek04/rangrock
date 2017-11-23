<div class="col-md-8">
       <?= $this->Form->create(NULL, ['url' => ['controller' => 'Image', 'action' => 'upload'],'id' => 'imageForm', 'novalidate' => 'novalidate','enctype'=>'multipart/form-data']) ?> 
    <div class="form-group">
        
            <label class="sr-only" for="image_file"> Image </label>
            <?php echo $this->Form->hidden('', ['type' => 'text','name'=>'userId','value'=>'1',]); ?>
            <?php echo $this->Form->input('', ['type'=>'file','class' => 'form-control','name'=>'image_file','id'=>'image_file','placeholder' => 'Image upload',]); ?>
        </div>
        <button type="submit" class="btn btn-default " id="imageBtn"> Upload </button>
    <?= $this->Form->end() ?>
</div>