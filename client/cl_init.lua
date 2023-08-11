local sd = exports.sd_util

--[[ 
	Do not touch below
]]

local function ToggleNuiFrame(shouldShow)
	SetNuiFocus(shouldShow, shouldShow)
	SendNUIMessage('visible', shouldShow)
end

RegisterCommand('show_ui_'..GetCurrentResourceName(), function()
	if sd:GetDebug(GetCurrentResourceName()) then
		ToggleNuiFrame(true)
	end
end)

RegisterNUICallback('closeUI', function(_, cb)
	ToggleNuiFrame(false)
	cb({})
end)

--[[ 
	Write your code below
]]