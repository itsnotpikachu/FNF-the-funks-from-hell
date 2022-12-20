function onCreate()
	if getPropertyFromClass('ClientPrefs','middleScroll') then
		bottomscreen = screenHeight-screenHeight/4
	else
		bottomscreen = screenHeight/2
	end

	makeLuaText('lyric','',screenWidth, 0, bottomscreen);
	setTextSize('lyric',30);
	setTextAlignment('lyric','center');
	setObjectCamera('lyric', 'other')
	addLuaText('lyric');
end

function onEvent(name, value1, value2)
	if name == 'lyricsSimple' then
		setTextString('lyric', value1)
		if value2 == "" then
			setTextColor('lyric', 'ffffff')
		else
			setTextColor('lyric', value2)
		end
	end
end