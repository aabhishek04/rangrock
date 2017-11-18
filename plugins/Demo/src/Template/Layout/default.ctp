<!DOCTYPE html>
<html>
<head>
    
    <?= $this->AssetCompress->css('css-combined'); ?>

</head>
<body>
      <?= $this->Flash->render() ?>
    <div>
        <?= $this->fetch('content') ?>
    </div>
    <footer>
    <?= $this->AssetCompress->script('jquery-combined'); ?>
    </footer>
</body>
</html>
