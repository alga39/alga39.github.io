<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>TEST.TV</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Candal&family=Inter:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<header class="header">
		<div class="container">
			<div class="header_inner">
				<a href="#" class="logo"><img src="img/logo.png" alt=""></a>
				<ul class="user_actions">
					<li class="user_registration">
						<p class="user_btn"><a href="#popup_reg" id="popup_open">Зарегистрироваться</a></p>
					</li>
					<li class="user_log-out">
						<p class="user_btn"><img class="user_btn_log-in" src="img/user_log-in.png" alt="">Войти</p>
					</li>
				</ul>
			</div>
		</div>
	</header>
	<div id="popup_reg" class="popup">
		<div class="popup_content">
				<!-- <a class="popup_close" href="#"><img src="img/popup_close.png" alt=""></a> -->
				<button id="popup_close" class="popup_close"><img src="img/popup_close.png" alt=""></button>
				<div class="popup_title_img">
					<img src="img/logo_min.png" alt="">
				</div>
				<div class="popup_title">
					<div class="line"></div>
					<div class="line_text"><p class="popup_title_text">Зарегистрироваться</p></div>
					<div class="line"></div>
				</div>
				<div class="popup_form">
					<form action="#" class="form" id="new_form">
						<label for="username" class="lbl_title">Имя</label>
						<div class="form_check"><input type="text" id="username" class="form_input" placeholder="Введите имя"></div>
						<label for="e-mail" class="lbl_title">Email</label>
						<div class="form_check"><input type="e-mail" id="e-mail" class="form_input" placeholder="Введите электронную почту"></div>
						<label for="form_pswd" class="lbl_title">Пароль</label>
						<div class="form_check form_check_mod"><input type="password" id="form_pswd" class="form_pswd form_input" placeholder="Придумайте пароль">
							<span class="pswd_icon" id="pswd_icon"><img src="img/eye.png" alt="" class="icon"></span>
						</div>
						

						<div class="chb chb_mod">
							<div class="chb_input">
								<input type="checkbox" class="form_chb" id="chb1">
								<label for="chb1" class="chb_label chb_label_gap"></label>
							</div>
							<div class="chb_text">
								<p class="chb_text_inner">Даю согласие на <a class="chb_link" href="#">обработку персональных данных</a></p>
							</div>
						</div>						
						<div class="chb">
							<div class="chb_input">
								<input type="checkbox" class="form_chb" id="chb2">
								<label for="chb2" class="chb_label chb_label_gap"></label>
							</div>
							<div class="chb_text">
								<p class="chb_text_inner">Ознакомлен c <a class="chb_link" href="#">политикой обработки персональных данных</a></p>
							</div>
						</div>
						<div class="chb">
							<div class="chb_input">
								<input type="checkbox" class="form_chb" id="chb3">
								<label for="chb3" class="chb_label chb_label_gap"></label>
							</div>
							<div class="chb_text">
								<p class="chb_text_inner">Ознакомлен с <a class="chb_link" href="#">Пользовательским соглашением</a></p>
							</div>
						</div>
 						<button type="submit" class="reg_btn">Зарегистрироваться</button> 
					</form>
					<div class="check_registration">
						<p class="check_registration_text"><a href="#" class="check_registration_link">Уже зарегистрирован?</a></p>
					</div>
				</div>
			</div>
	</div>
	<script src="js/main.js"></script>
</body>
</html>