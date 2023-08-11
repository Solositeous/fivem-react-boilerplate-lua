fx_version "cerulean"

description "React Lua"
author "Jones"
version "1.0.0"

lua54 "yes"

games {
	"gta5",
}

ui_page "web/build/index.html"

client_script "client/**/*"
server_script "server/**/*"

files {
	"web/build/index.html",
	"web/build/**/*",
}