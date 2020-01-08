I. SourceCode:
	- Directorul contine un alt director generat de Angular la crearea proiectului.
	- In directorul /SourceCode/order-game/src/app se gaseste componenta principala a proiectului, cele 3 subcomponente
	  (home, game, highscore) si alte fisiere necesare.

II. OrderGame:
	- Directorul contine toate fisierele necesare pentru a fi rulata aplicatia in productie, printre care si fisierul
	  .htaccess si 2 fisiere .php folosite ca proxy, deoarece request-urile HTTP executate din aplicatia de front-end
	  Angular primesc eroarea din cauza CORS (Cross-Origin Resource Sharing)
	- Pentru testarea aplicatiei am folosit Apache HTTP Server cu ajutorul XAMPP.
	- Instalare:
		1. Se verifica ca mod_rewrite si ssl sa fie activate in cadrul serverlui Apache (deoarece aplicatia foloseste ServiceWorkers pentru cazul
		   cand nu exista conexiune la internet)
		2. Se copiaza directorul OrderGame in root-ul serverului HTTP (in cazul XAMPP: /XAMPP/htdocs)
		3. Se acceseaza aplicatia folosind: 
			- http://"adresa server"/OrderGame
			sau
			- https://"adresa server"/OrderGame
		   Se face redirectare automata catre varianta securizata a aplicatiei, prin urmare se poate folosi si
		primul link.
		4. In cazul in care browser-ul prezinta o pagina de avertizare, se apasa pe "Advanced", dupa care 
		   "Proceed.." (aceasta avertizare poate aparea din cauza cerificatelor Self-Signed)
	