<!doctype html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="css/font-awesome.css" type="text/css">
	<link rel="stylesheet" href="css/style.css" type="text/css">
	<link rel="stylesheet" href="css/media.css" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Cuprum" rel="stylesheet">
	<title>Tom menu</title>
</head>
<body>
<header>
	<nav class="dws-menu">
		<input type="checkbox" name="toggle" id="menu" class="toggleMenu">
		<label for="menu" class="toggleMenu"><i class="fa fa-bars"></i>Меню</label>
		<ul>
			<li><a href="index.html"><i class="fa fa-home"></i>Главная</a></li>
			<li>
				<input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m1">
				<a href="#"><i class="fa fa-shopping-cart"></i>Пенсионеры</a>
				<label for="sub_m1" class="toggleSubmenu"><i class="fa"></i></label>
				<ul>
					<li>
						<input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m1-1">
						<a href="#">Льготы</a>
						<label for="sub_m1-1" class="toggleSubmenu"><i class="fa"></i></label>
						<ul>
							<li><a href="#">Региональные льготы</a></li>
							<li><a href="fed_lgoty.html">Федеральные льготы</a></li>
							<li><a href="lgoty_70.html">Льготы пенсионерам старше 70 лет</a></li>
							<li><a href="lgoty_80.html">Льготы пенсионерам старше 80 лет</a></li>
							<li><a href="lgoty_rab.html">Льготы работающим пенсионерам</a></li>
							<li><a href="lgoty_voen.html">Льготы военным пенсионерам</a></li>
							<li><a href="lgoty_nalog.html">Какие налоги не платят пенсионеры</a></li>
						</ul>
					</li>
					<li>
						<input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m1-2">
						<a href="#">Услуги</a>
						<label for="sub_m1-2" class="toggleSubmenu"><i class="fa"></i></label>
						<!-- <ul>
							<li><a href="#">Льготы пенсионерам старше 80 лет</a></li>
							

							<li>
								<input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m1-2-1">
								<a href="#">Телефоны</a>
								<label for="sub_m1-2-1" class="toggleSubmenu"><i class="fa"></i></label>
								<ul>
									<li><a href="#">Samsung</a></li>
									<li><a href="#">Flf</a></li>
									<li><a href="#">Apple</a></li>
								</ul>
							</li>
						</ul> -->
					</li>
				</ul>
			</li>
			<li>
				<input type="checkbox" name="toggle" class="toggleSubmenu" id="sub_m2">
				<a href="#"><i class="fa fa-cogs"></i>Услуги</a>
				<label for="sub_m2" class="toggleSubmenu"><i class="fa"></i></label>
				<ul>
					<li><a href="#">Услуга 1</a></li>
					<li><a href="#">Услуга 2</a></li>
					<li><a href="#">Услуга 3</a></li>
				</ul>
			</li>
			<!-- <li><a href="#"><i class="fa fa-th-list"></i>Новости</a></li>
			<li><a href="#"><i class="fa fa-envelope-open"></i>Контакты</a></li> -->
		</ul>
	</nav>
</header>
<?php
	$file = "like.txt";
	if(!is_file($file)){
		$fh = fopen($file, 'w');
 		fwrite($fh, 0);
 		fclose($fh);
	}
	$data = (int)file_get_contents($file);
?>
<?php
	$file1 = "dislike.txt";
	if(!is_file($file1)){
		$fh1 = fopen($file1, 'w');
 		fwrite($fh1, 0);
 		fclose($fh1);
	}
	$data1 = (int)file_get_contents($file1);
?>
<!-- <div class="counter">Clicked: <span id="counter1"><?= $data1 ?></span></div>
 -->
 <div class="vol_img">
 	<img src="img/volunteuer.png" alt="">
 </div>
 <div class="header_text">
 	<h1>Оцените нашу систему</h1>
 </div>
<div class="vol_img">
	<a href="#" id="link"><img src="img/like.png" alt=""></a>
	<a href="#" id="link1"><img src="img/dislike.png" alt=""></a>
</div>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="js/counter.js"></script>
<script src="js/counter1.js"></script>
</body>
</html>