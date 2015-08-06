/* Made by Incognito.
===[ Phantom ]===
Do not distribute without the written permision of Incognito. No modification or copying is allowed, and any unallowed copies shall be ceased. */
var sdcard = android.os.Environment.getExternalStorageDirectory();
print('Hello there!');
print("Thanks for using Phantom!");

/* --<=>-- VAR --<=>-- */

var version = "0.1";
var sprintMode = false;
var freezeCheck = false;
var godmodeCheck = false;
var g = "No";
var i = 1;
var round = 1;
var doNoclip = false;
var cury = 0;
var cd = 0;
var speed = .5;
var realHealh = 5;
var defaultDestroyTime = [null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null, null, 0.5, 0.6, 3, 3, 3, 2, 0.2, 0.6, 0.3, 3, 3, null, 0.8, null, 0.2, 0.7, null, null, 4, 0, 0, null, null, 0.8, null, 0, 0, 0, 0, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0, 0, null, 2, 2.5, null, 3, 5, 2.5, 0, 0.6, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, null, null, 5, null, 3, 3, null, null, null, 0.1, 0.5, 0.2, 0.4, 0.6, 0, null, 2, 1, 0.4, 0.3, null, 1, 0.5, null, null, -1, 3, null, 1.5, null, null, 5, 0.3, 1, 0, 0, null, 2, 2, 1.5, null, null, 2, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null, 0.8, null, null, null, null, null, 2, 2, 2, null, null, 2, null, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null, 0.8, 0.8, 2, 2, null, null, null, null, null, null, null, null, null, null, null, 0.5, 0.1, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 3.5, 50, 5, 0.6, 0.6, 5, null, null, null, null, 0]
var jumpHeight = "1";
var yno = "No";
var numbers = android.text.InputType.TYPE_CLASS_NUMBER;
var number = android.text.InputType.TYPE_NUMBER_FLAG_SIGNED;
var buttonButton = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/phantom";
var pathFont = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/phantom";
var gui = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/phantom";
var gui2 = android.os.Environment.getExternalStorageDirectory().getAbsolutePath + "/games/com.mojang/phantom";
var gui3 = android.os.Environment.getExternalStorageDirectory().getAbsolutePath + "/games/com.mojang/phantom";

function Base64Decode(byteArray, Path) {
    try {
        var File = new java.io.File(Path);
        if (!File.exists()) {
            File.createNewFile();
            var Stream = new java.io.FileOutputStream(File);
            Stream.write(byteArray);
            Stream.close();
        }
        mcfont = new android.graphics.Typeface.createFromFile(pathFont + "/minecraft.ttf")
    } catch (err) {
        print(err);
    }
}
Base64Decode(android.util.Base64.decode(buttonButton, 0), pathFont + "/dirt.png");
var img1 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/phantom/backgrounds/dirt.png");
var buttonGUI = new android.graphics.drawable.BitmapDrawable(img1);

Base64Decode(android.util.Base64.decode(buttonButton, 0), pathFont + "/gui.png");
var img2 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/phantom/gui.png");
var buttonGUI2 = new android.graphics.drawable.BitmapDrawable(img2);

Base64Decode(android.util.Base64.decode(buttonButton, 0), pathFont + "/gui_pressed.png");
var img3 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/phantom/gui_pressed.png");
var buttonGUI3 = new android.graphics.drawable.BitmapDrawable(img3);

Base64Decode(android.util.Base64.decode(buttonButton, 0), pathFont + "/mini_gui.png");
var img4 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/phantom/mini_gui.png");
var miniGUI = new android.graphics.drawable.BitmapDrawable(img4);

Base64Decode(android.util.Base64.decode(buttonButton, 0), pathFont + "/backgrounds/dirt2.png");
var img5 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/phantom/backgrounds/dirt2.png");
var buttonGUI4 = new android.graphics.drawable.BitmapDrawable(img5);



var dirt2 = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABw0lEQVR4nM2WS0/CQBSFPwiPCosS0UhidOnCn+D//yW6kQgJ1RR5KS7aU50DE9wNZ9POdGZ6z7mPua2nx7s9QLna8Bef620wvsqH/GfdclWNB1n36P5ZUQbjNonReri93ANc9CuL58USOGSg79tsDMD79CVY5wq5Mn6+kF4BxYB8I8iX9zcjjn0X3LcOnSP4eckV6Mhnu/4IgElWWTyjslDfPbrd5/KxfK+xEMui9Ao0L+sFACUhw+dpNT/OB8AvQ/kwlj0fDOsf1OfWzH1degXESD4WI1ns9cCjOlb5NsVb9YMsjA2PofQKNL5eLYDDCtbJJ9V88QocMhC8xpOH854lUji9AnqJMStXcwC6xsCZKRbKfpjnQqw+pFfAK1PMZ265Z4PqhOCxJJxfHdBL7L4WfN7zPsb4IFsIFT4fBYRonhPmudd23fPN+iK8TZsfWl05HwXch265dz7yYS+/rtcf74ikkLJkVzNXFiVXoOmKZZHf+57/w6wHxHvAU/DYSq5AEwPOXCg33wC091/BvFdK76LVScV6SCG9AqeYyNenOiE9Y7Hh2SOkV8AnxNz7/WZDXcnG/fnRA7338/2udHIFfgBs9yLA5bCE1QAAAABJRU5ErkJggg==";


var gui_pressed = "iVBORw0KGgoAAAANSUhEUgAAAIAAAAAwCAYAAADZ9HK+AAAKQWlDQ1BJQ0MgUHJvZmlsZQAASA2dlndUU9kWh8+9N73QEiIgJfQaegkg0jtIFQRRiUmAUAKGhCZ2RAVGFBEpVmRUwAFHhyJjRRQLg4Ji1wnyEFDGwVFEReXdjGsJ7601896a/cdZ39nnt9fZZ+9917oAUPyCBMJ0WAGANKFYFO7rwVwSE8vE9wIYEAEOWAHA4WZmBEf4RALU/L09mZmoSMaz9u4ugGS72yy/UCZz1v9/kSI3QyQGAApF1TY8fiYX5QKUU7PFGTL/BMr0lSkyhjEyFqEJoqwi48SvbPan5iu7yZiXJuShGlnOGbw0noy7UN6aJeGjjAShXJgl4GejfAdlvVRJmgDl9yjT0/icTAAwFJlfzOcmoWyJMkUUGe6J8gIACJTEObxyDov5OWieAHimZ+SKBIlJYqYR15hp5ejIZvrxs1P5YjErlMNN4Yh4TM/0tAyOMBeAr2+WRQElWW2ZaJHtrRzt7VnW5mj5v9nfHn5T/T3IevtV8Sbsz55BjJ5Z32zsrC+9FgD2JFqbHbO+lVUAtG0GQOXhrE/vIADyBQC03pzzHoZsXpLE4gwnC4vs7GxzAZ9rLivoN/ufgm/Kv4Y595nL7vtWO6YXP4EjSRUzZUXlpqemS0TMzAwOl89k/fcQ/+PAOWnNycMsnJ/AF/GF6FVR6JQJhIlou4U8gViQLmQKhH/V4X8YNicHGX6daxRodV8AfYU5ULhJB8hvPQBDIwMkbj96An3rWxAxCsi+vGitka9zjzJ6/uf6Hwtcim7hTEEiU+b2DI9kciWiLBmj34RswQISkAd0oAo0gS4wAixgDRyAM3AD3iAAhIBIEAOWAy5IAmlABLJBPtgACkEx2AF2g2pwANSBetAEToI2cAZcBFfADXALDIBHQAqGwUswAd6BaQiC8BAVokGqkBakD5lC1hAbWgh5Q0FQOBQDxUOJkBCSQPnQJqgYKoOqoUNQPfQjdBq6CF2D+qAH0CA0Bv0BfYQRmALTYQ3YALaA2bA7HAhHwsvgRHgVnAcXwNvhSrgWPg63whfhG/AALIVfwpMIQMgIA9FGWAgb8URCkFgkAREha5EipAKpRZqQDqQbuY1IkXHkAwaHoWGYGBbGGeOHWYzhYlZh1mJKMNWYY5hWTBfmNmYQM4H5gqVi1bGmWCesP3YJNhGbjS3EVmCPYFuwl7ED2GHsOxwOx8AZ4hxwfrgYXDJuNa4Etw/XjLuA68MN4SbxeLwq3hTvgg/Bc/BifCG+Cn8cfx7fjx/GvyeQCVoEa4IPIZYgJGwkVBAaCOcI/YQRwjRRgahPdCKGEHnEXGIpsY7YQbxJHCZOkxRJhiQXUiQpmbSBVElqIl0mPSa9IZPJOmRHchhZQF5PriSfIF8lD5I/UJQoJhRPShxFQtlOOUq5QHlAeUOlUg2obtRYqpi6nVpPvUR9Sn0vR5Mzl/OX48mtk6uRa5Xrl3slT5TXl3eXXy6fJ18hf0r+pvy4AlHBQMFTgaOwVqFG4bTCPYVJRZqilWKIYppiiWKD4jXFUSW8koGStxJPqUDpsNIlpSEaQtOledK4tE20Otpl2jAdRzek+9OT6cX0H+i99AllJWVb5SjlHOUa5bPKUgbCMGD4M1IZpYyTjLuMj/M05rnP48/bNq9pXv+8KZX5Km4qfJUilWaVAZWPqkxVb9UU1Z2qbapP1DBqJmphatlq+9Uuq43Pp893ns+dXzT/5PyH6rC6iXq4+mr1w+o96pMamhq+GhkaVRqXNMY1GZpumsma5ZrnNMe0aFoLtQRa5VrntV4wlZnuzFRmJbOLOaGtru2nLdE+pN2rPa1jqLNYZ6NOs84TXZIuWzdBt1y3U3dCT0svWC9fr1HvoT5Rn62fpL9Hv1t/ysDQINpgi0GbwaihiqG/YZ5ho+FjI6qRq9Eqo1qjO8Y4Y7ZxivE+41smsImdSZJJjclNU9jU3lRgus+0zwxr5mgmNKs1u8eisNxZWaxG1qA5wzzIfKN5m/krCz2LWIudFt0WXyztLFMt6ywfWSlZBVhttOqw+sPaxJprXWN9x4Zq42Ozzqbd5rWtqS3fdr/tfTuaXbDdFrtOu8/2DvYi+yb7MQc9h3iHvQ732HR2KLuEfdUR6+jhuM7xjOMHJ3snsdNJp9+dWc4pzg3OowsMF/AX1C0YctFx4bgccpEuZC6MX3hwodRV25XjWuv6zE3Xjed2xG3E3dg92f24+ysPSw+RR4vHlKeT5xrPC16Il69XkVevt5L3Yu9q76c+Oj6JPo0+E752vqt9L/hh/QL9dvrd89fw5/rX+08EOASsCegKpARGBFYHPgsyCRIFdQTDwQHBu4IfL9JfJFzUFgJC/EN2hTwJNQxdFfpzGC4sNKwm7Hm4VXh+eHcELWJFREPEu0iPyNLIR4uNFksWd0bJR8VF1UdNRXtFl0VLl1gsWbPkRoxajCCmPRYfGxV7JHZyqffS3UuH4+ziCuPuLjNclrPs2nK15anLz66QX8FZcSoeGx8d3xD/iRPCqeVMrvRfuXflBNeTu4f7kufGK+eN8V34ZfyRBJeEsoTRRJfEXYljSa5JFUnjAk9BteB1sl/ygeSplJCUoykzqdGpzWmEtPi000IlYYqwK10zPSe9L8M0ozBDuspp1e5VE6JA0ZFMKHNZZruYjv5M9UiMJJslg1kLs2qy3mdHZZ/KUcwR5vTkmuRuyx3J88n7fjVmNXd1Z752/ob8wTXuaw6thdauXNu5Tnddwbrh9b7rj20gbUjZ8MtGy41lG99uit7UUaBRsL5gaLPv5sZCuUJR4b0tzlsObMVsFWzt3WazrWrblyJe0fViy+KK4k8l3JLr31l9V/ndzPaE7b2l9qX7d+B2CHfc3em681iZYlle2dCu4F2t5czyovK3u1fsvlZhW3FgD2mPZI+0MqiyvUqvakfVp+qk6oEaj5rmvep7t+2d2sfb17/fbX/TAY0DxQc+HhQcvH/I91BrrUFtxWHc4azDz+ui6rq/Z39ff0TtSPGRz0eFR6XHwo911TvU1zeoN5Q2wo2SxrHjccdv/eD1Q3sTq+lQM6O5+AQ4ITnx4sf4H++eDDzZeYp9qukn/Z/2ttBailqh1tzWibakNml7THvf6YDTnR3OHS0/m/989Iz2mZqzymdLz5HOFZybOZ93fvJCxoXxi4kXhzpXdD66tOTSna6wrt7LgZevXvG5cqnbvfv8VZerZ645XTt9nX297Yb9jdYeu56WX+x+aem172296XCz/ZbjrY6+BX3n+l37L972un3ljv+dGwOLBvruLr57/17cPel93v3RB6kPXj/Mejj9aP1j7OOiJwpPKp6qP6391fjXZqm99Oyg12DPs4hnj4a4Qy//lfmvT8MFz6nPK0a0RupHrUfPjPmM3Xqx9MXwy4yX0+OFvyn+tveV0auffnf7vWdiycTwa9HrmT9K3qi+OfrW9m3nZOjk03dp76anit6rvj/2gf2h+2P0x5Hp7E/4T5WfjT93fAn88ngmbWbm3/eE8/syOll+AAAACXBIWXMAABYlAAAWJQFJUiTwAAADy2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE0LTA5LTExVDIyOjMxOjQ0PC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTQtMDktMTFUMjI6MzE6MzM8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj4xNDQ8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjE0NDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTI4PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjQ4PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CoTXvMoAAAEhSURBVHgB7ZyxDYNAFMUOxP6LpIpElIaKHYjENETXeQf7qtc+P+vKvxzv1zN6WgKrtnnFx2c/xjY53NcvHEIC3/Mc/QDC4Vk5AUhDmBNAODorJwBpCHMCCEdn5QQgDWFOAOHorJwApCHMCSAcnZUTgDSEOQGEo7NyApCGMCeAcHRWTgDSEOYEEI7OyglAGsKcAMLRWTkBSEOYE0A4OisnAGkIcwIIR2flBCANYU4A4eisnACkIcwJIBydlROANIQ5AYSjs3ICkIYwJ4BwdFZOANIQ5gQQjs7KCUAawpwAwtFZOQFIQ5gTQDg6KycAaQhzAghHZ+UEIA1hTgDh6KycAKQhzAkgHJ2VE4A0hDkBhKOzcgKQhjBv82L0PBrccxL4A+8QDr/rw2ZtAAAAAElFTkSuQmCC";

/* --<=>-- GUI --<=>-- */

var GUI;
var menu;

function dip2px(dips) {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function newLevel() {
    clientMessage(ChatColor.RED + "[PHANTOM] " + ChatColor.GREEN + "Welcome!");
    ModPE.showTipMessage("§3Thanks for downloading!\n\n\n");
    welcome();
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(ctx);
                layout.setOrientation(1);
                var menuBtn = new android.widget.TextView(ctx);
                menuBtn.setText('[P.H]');
                menuBtn.setTextSize(24);
                menuBtn.setTypeface(mcfont);
                menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        phantom_menu();
                    }
                }));
                layout.addView(menuBtn);


                GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 10, 20);
            } catch (err) {
                print('An error occured: ' + err);
            }
        }
    }));
}

function phantom_menu() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var menuLayout = new android.widget.LinearLayout(ctx);
                var menuScroll = new android.widget.ScrollView(ctx);
                var menuLayout1 = new android.widget.LinearLayout(ctx);
                menuLayout.setOrientation(1);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayout);
                menuLayout1.addView(menuScroll);
                var top1 = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
                top1.setMax(100);
                top1.setProgress(100);
                menuLayout.addView(top1);

                var space1 = new android.widget.TextView(ctx);
                space1.setText('\n');
                menuLayout.addView(space1);

                var title = new android.widget.TextView(ctx);
                title.setText(' PHANTOM v' + version);
                title.setTypeface(mcfont);
                title.setTextSize(26);
                menuLayout.addView(title);


                var position = new android.widget.TextView(ctx);
                position.setText("Your position: " + "X: " + Math.round(Player.getX()) + ", Y: " + Math.round(Player.getY()) + ", Z: " + Math.round(Player.getZ()));
                position.setTypeface(mcfont);
                position.setTextSize(14);
                menuLayout.addView(position);


                var x = new android.widget.Button(ctx);
                x.setText('Exit');
                x.setBackgroundDrawable(buttonGUI2);
                x.setTypeface(mcfont);
                x.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        menu1.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(x);

                /* --<=>-- BUTTONS --<=>-- */

                var main = new android.widget.Button(ctx);
                main.setText('Main Mods');
                main.setBackgroundDrawable(buttonGUI2);
                main.setTypeface(mcfont);
                main.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        main_mods();
                        menu1.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(main);



                var lobby = new android.widget.Button(ctx);
                lobby.setText('World Mods');
                lobby.setTypeface(mcfont);
                lobby.setBackgroundDrawable(buttonGUI2);
                lobby.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        lobby_mods();
                        menu1.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(lobby);




                var tmi = new android.widget.Button(ctx);
                tmi.setText('Give Mods');
                tmi.setTypeface(mcfont);
                tmi.setBackgroundDrawable(buttonGUI2);
                tmi.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        menu1.dismiss();
                        give_menu();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(tmi);


                var fun = new android.widget.Button(ctx);
                fun.setText('Fun Mods');
                fun.setTypeface(mcfont);
                fun.setBackgroundDrawable(buttonGUI2);
                fun.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        menu1.dismiss();
                        fun_mods();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(fun);




                var spawn = new android.widget.Button(ctx);
                spawn.setText('Spawning Mods');
                spawn.setTypeface(mcfont);
                spawn.setBackgroundDrawable(buttonGUI2);
                spawn.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        spawn_menu();
                        menu1.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(spawn);


                var more = new android.widget.Button(ctx);
                more.setText('Other...');
                more.setTypeface(mcfont);
                more.setBackgroundDrawable(buttonGUI2);
                more.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        more_mods();
                        menu1.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(more);




                var google1 = new android.widget.Button(ctx);
                google1.setText('+Incognito on G+!');
                google1.setTypeface(mcfont);
                google1.setBackgroundDrawable(buttonGUI2);
                google1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        menu1.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        android.widget.Toast.makeText(ctx, "Opening...", 0).show();
                        var intentBrowser = new android.content.Intent(ctx);
                        intentBrowser.setAction(android.content.Intent.ACTION_VIEW);
                        intentBrowser.setData(android.net.Uri.parse("https://plus.google.com/+Incognitov"));
                        ctx.startActivity(intentBrowser)
                    }
                }));
                menuLayout.addView(google1);


                var makers = new android.widget.TextView(ctx);
                makers.setText('       ♠♠♠By Incognito!♠♠♠');
                makers.setTextSize(17);
                makers.setTypeface(mcfont);
                makers.setTextColor(android.graphics.Color.parseColor('#AFFAFF'));
                menuLayout.addView(makers);


                var space2 = new android.widget.TextView(ctx);
                space2.setText('\n');
                menuLayout.addView(space2);


                var end1 = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
                end1.setMax(100);
                end1.setProgress(100);
                menuLayout.addView(end1);




                menu1 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                menu1.setBackgroundDrawable(buttonGUI);
                menu1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
            } catch (error) {
                print('An error occured: ' + error);
            }
        }
    }));
}

/* --<=>-- INSIDE THE BUTTONS --<=>-- */

function main_mods() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var menuLayout = new android.widget.LinearLayout(ctx);
                var menuScroll = new android.widget.ScrollView(ctx);
                var menuLayout1 = new android.widget.LinearLayout(ctx);
                menuLayout.setOrientation(1);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayout);
                menuLayout1.addView(menuScroll);
                var x = new android.widget.Button(ctx);
                x.setText('Exit');
                x.setTypeface(mcfont);
                x.setBackgroundDrawable(buttonGUI2);
                x.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        menu2.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(x);


                var godmode = new android.widget.Button(ctx);
                godmode.setText("God Mode: Off");
                godmode.setBackgroundDrawable(buttonGUI2);;
                godmode.setTypeface(mcfont);
                godmode.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!godmodeCheck) {
                            godmodeCheck = true;
                            Player.setHealth(+9999999);
                            godmode.setText("God Mode: On");
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        } else {
                            godmodeCheck = false;
                            Player.setHealth(20);
                            godmode.setText("God Mode: Off");
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(godmode);




                var kill = new android.widget.Button(ctx);
                kill.setText('Suicide');
                kill.setBackgroundDrawable(buttonGUI2);
                kill.setTypeface(mcfont);
                kill.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.setHealth(-99999999);
                        ModPE.showTipMessage(ChatColor.GREEN + " " + Player.getName(getPlayerEnt()) + ", say goodbye...");
                        menu2.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(kill);


                var fov1 = new android.widget.Button(ctx);
                fov1.setText('Change FOV to 80');
                fov1.setTypeface(mcfont);
                fov1.setBackgroundDrawable(buttonGUI2);
                fov1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        ModPE.setFov(80);
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        menu2.dismiss();
                        ModPE.showTipMessage(ChatColor.RED + "FOV updated.");
                    }
                }));
                menuLayout.addView(fov1);


                var fov2 = new android.widget.Button(ctx);
                fov2.setText('Change FOV to 100');
                fov2.setTypeface(mcfont);
                fov2.setBackgroundDrawable(buttonGUI2);
                fov2.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        ModPE.setFov(100);
                        ModPE.showTipMessage(ChatColor.RED + "FOV updated.");
                        menu2.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(fov2);



                var fov3 = new android.widget.Button(ctx);
                fov3.setText('Change FOV to 120');
                fov3.setTypeface(mcfont);
                fov3.setBackgroundDrawable(buttonGUI2);
                fov3.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        ModPE.setFov(120);
                        ModPE.showTipMessage(ChatColor.RED + ' FOV updated.');
                        menu2.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(fov3);



                var nfov = new android.widget.Button(ctx);
                nfov.setText('Remove FOV');
                nfov.setTypeface(mcfont);
                nfov.setBackgroundDrawable(buttonGUI2);
                nfov.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        ModPE.resetFov();
                        menu2.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(nfov);




                var walls = new android.widget.Button(ctx);
                walls.setText('No Walls');
                walls.setTypeface(mcfont);
                walls.setBackgroundDrawable(buttonGUI2);
                walls.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Entity.setCollisionSize(getPlayerEnt(), 0, 0);
                        clientMessage(ChatColor.AQUA + 'Quitting the game may kill you...');
                        menu2.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(walls);




                menu2 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                menu2.setBackgroundDrawable(buttonGUI);
                menu2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
            } catch (error) {
                print('An error occured: ' + error);
            }
        }
    }));
}

function lobby_mods() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var menuLayout = new android.widget.LinearLayout(ctx);
                var menuScroll = new android.widget.ScrollView(ctx);
                var menuLayout1 = new android.widget.LinearLayout(ctx);
                menuLayout.setOrientation(1);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayout);
                menuLayout1.addView(menuScroll);
                var x = new android.widget.Button(ctx);
                x.setText('Quitter');
                x.setTypeface(mcfont);
                x.setBackgroundDrawable(buttonGUI2);
                x.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        menu3.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(x);


                var day = new android.widget.Button(ctx);
                day.setText('Day');
                day.setTypeface(mcfont);
                day.setBackgroundDrawable(buttonGUI2);
                day.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        ModPE.showTipMessage(ChatColor.AQUA + 'No need to sleep!');
                        menu3.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        Level.setTime(0);
                    }
                }));
                menuLayout.addView(day);


                var night = new android.widget.Button(ctx);
                night.setText('Night');
                night.setTypeface(mcfont);
                night.setBackgroundDrawable(buttonGUI2);
                night.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        ModPE.showTipMessage(ChatColor.GREEN + 'Feeling sleepy, ' + Player.getName(getPlayerEnt()) + '?');
                        menu3.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        Level.setTime(12000);
                    }
                }));
                menuLayout.addView(night);


                var gamemode = new android.widget.Button(ctx);
                var currSurvival = Level.getGameMode() === 0;
                gamemode.setBackgroundDrawable(buttonGUI2);
                gamemode.setTypeface(mcfont);
                gamemode.setText(currSurvival ? "Change to creative" : "Change to survival");
                gamemode.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        menu3.dismiss();
                        currSurvival = !currSurvival;
                        Level.setGameMode(currSurvival ? 0 : 1);
                        gamemode.setText(currSurvival ? "Change to creative" : "Change to survival");
                    }
                }));
                menuLayout.addView(gamemode);


                menu3 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                menu3.setBackgroundDrawable(buttonGUI);
                menu3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
            } catch (error) {
                print('An error occured: ' + error);
            }
        }
    }));
}

function give_menu() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var menuLayout = new android.widget.LinearLayout(ctx);
                var menuScroll = new android.widget.ScrollView(ctx);
                var menuLayout1 = new android.widget.LinearLayout(ctx);
                menuLayout.setOrientation(1);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayout);
                menuLayout1.addView(menuScroll);
                var x = new android.widget.Button(ctx);
                x.setText('Quitter');
                x.setTypeface(mcfont);
                x.setBackgroundDrawable(buttonGUI2);
                x.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        menu4.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(x);


                var blocks = new android.widget.Button(ctx);
                blocks.setText('Blocks');
                blocks.setTypeface(mcfont);
                blocks.setBackgroundDrawable(buttonGUI2);
                blocks.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        blocks_menu();
                        menu4.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(blocks);


                var deco = new android.widget.Button(ctx);
                deco.setText('Decorations');
                deco.setTypeface(mcfont);
                deco.setBackgroundDrawable(buttonGUI2);
                deco.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        deco_menu();
                        menu4.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(deco);



                var tools = new android.widget.Button(ctx);
                tools.setText('Weapons and Tools');
                tools.setTypeface(mcfont);
                tools.setBackgroundDrawable(buttonGUI2);
                tools.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        tools_menu();
                        menu4.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(tools);


                var more2 = new android.widget.Button(ctx);
                more2.setText('Other/More Items');
                more2.setTypeface(mcfont);
                more2.setBackgroundDrawable(buttonGUI2);
                more2.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        more_items();
                        menu4.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(more2);



                var custom = new android.widget.Button(ctx);
                custom.setText('Custom Block(By ID)');
                custom.setTypeface(mcfont);
                custom.setBackgroundDrawable(buttonGUI2);
                custom.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        custom_menu();
                        menu4.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(custom);



                menu4 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                menu4.setBackgroundDrawable(buttonGUI);
                menu4.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
            } catch (error) {
                print('An error occured: ' + error);
            }
        }
    }));
}

function fun_mods() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var menuLayout = new android.widget.LinearLayout(ctx);
                var menuScroll = new android.widget.ScrollView(ctx);
                var menuLayout1 = new android.widget.LinearLayout(ctx);
                menuLayout.setOrientation(1);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayout);
                menuLayout1.addView(menuScroll);
                var x = new android.widget.Button(ctx);
                x.setText('Quitter');
                x.setTypeface(mcfont);
                x.setBackgroundDrawable(buttonGUI2);
                x.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        menu6.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(x);



                var armor = new android.widget.Button(ctx);
                armor.setText('Auto Diamond Armour');
                armor.setTypeface(mcfont);
                armor.setBackgroundDrawable(buttonGUI2);
                armor.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.setArmorSlot(0, 310, 0);
                        Player.setArmorSlot(1, 311, 0);
                        Player.setArmorSlot(2, 312, 0);
                        Player.setArmorSlot(3, 313, 0);
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        menu6.dismiss();
                    }
                }));
                menuLayout.addView(armor);


                var noclip = new android.widget.Button(ctx);
                noclip.setText('No-Clip');
                noclip.setTypeface(mcfont);
                noclip.setBackgroundDrawable(buttonGUI2);
                noclip.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        menu6.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        no_clip1();
                        no_clip2();
                        no_clip3();
                        clientMessage(ChatColor.RED + 'Tip: Turn on AC-130 with No-Clip');

                    }
                }));
                menuLayout.addView(noclip);

                var explode = new android.widget.Button(ctx);
                explode.setText('Explode your position');
                explode.setTypeface(mcfont);
                explode.setBackgroundDrawable(buttonGUI2);
                explode.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        menu6.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        Level.explode(getPlayerX(), getPlayerY(), getPlayerZ(), 5);
                    }
                }));
                menuLayout.addView(explode);

                var drain = new android.widget.Button(ctx);
                drain.setText('Diamond rain');
                drain.setTypeface(mcfont);
                drain.setBackgroundDrawable(buttonGUI2);
                drain.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        Level.dropItem(getPlayerX(), getPlayerY() + 5, getPlayerZ(), 0, 264, 10);
                        Level.dropItem(getPlayerX() - 1, getPlayerY() + 5, getPlayerZ(), 0, 264, 5);
                        Level.dropItem(getPlayerX() - 1, getPlayerY() + 5, getPlayerZ() + 1, 0, 264, 5);
                        Level.dropItem(getPlayerX(), getPlayerY() + 5, getPlayerZ() - 1, 0, 264, 5);
                        Level.dropItem(getPlayerX(), getPlayerY() + 5, getPlayerZ() + 1, 0, 264, 5);
                        Level.dropItem(getPlayerX() - 1, getPlayerY() + 5, getPlayerZ() - 1, 0, 264, 5);
                        Level.dropItem(getPlayerX() + 1, getPlayerY() + 5, getPlayerZ() + 1, 0, 264, 5);
                        Level.dropItem(getPlayerX() + 1, getPlayerY() + 5, getPlayerZ(), 0, 264, 5);
                        Level.dropItem(getPlayerX() + 1, getPlayerY() + 5, getPlayerZ() + 1, 0, 264, 5);
                    }
                }));
                menuLayout.addView(drain);

                var irain = new android.widget.Button(ctx);
                irain.setText('Iron rain');
                irain.setTypeface(mcfont);
                irain.setBackgroundDrawable(buttonGUI2);
                irain.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        Level.dropItem(getPlayerX(), getPlayerY() + 5, getPlayerZ(), 0, 265, 10);
                        Level.dropItem(getPlayerX() - 1, getPlayerY() + 5, getPlayerZ(), 0, 265, 5);
                        Level.dropItem(getPlayerX() - 1, getPlayerY() + 5, getPlayerZ() + 1, 0, 265, 5);
                        Level.dropItem(getPlayerX(), getPlayerY() + 5, getPlayerZ() - 1, 0, 265, 5);
                        Level.dropItem(getPlayerX(), getPlayerY() + 5, getPlayerZ() + 1, 0, 265, 5);
                        Level.dropItem(getPlayerX() - 1, getPlayerY() + 5, getPlayerZ() - 1, 0, 265, 5);
                        Level.dropItem(getPlayerX() + 1, getPlayerY() + 5, getPlayerZ() + 1, 0, 265, 5);
                        Level.dropItem(getPlayerX() + 1, getPlayerY() + 5, getPlayerZ(), 0, 265, 5);
                        Level.dropItem(getPlayerX() + 1, getPlayerY() + 5, getPlayerZ() + 1, 0, 265, 5);
                    }
                }));
                menuLayout.addView(irain);

                var grain = new android.widget.Button(ctx);
                grain.setText('Gold rain');
                grain.setTypeface(mcfont);
                grain.setBackgroundDrawable(buttonGUI2);
                grain.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        Level.dropItem(getPlayerX() + 2, getPlayerY() + 1, getPlayerZ(), 0, 266, 5);
                    }
                }));
                menuLayout.addView(grain);


                var freez = new android.widget.Button(ctx);
                freez.setText('Freeze the game');
                freez.setTypeface(mcfont);
                freez.setBackgroundDrawable(buttonGUI2);
                freez.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        freeze();
                        menu6.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(freez);

                var clone = new android.widget.Button(ctx);
                clone.setText('Spawn a clone');
                clone.setTypeface(mcfont);
                clone.setBackgroundDrawable(buttonGUI2);
                clone.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        clone = Level.spawnMob(getPlayerX(), getPlayerY() + 2, getPlayerZ(), 11, "mob/char.png");
                        Entity.setRenderType(clone, 3);
                        Entity.setHealth(clone, 20);
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(clone);

                var nuke = new android.widget.Button(ctx);
                nuke.setText('Nuke (Laggy)');
                nuke.setTypeface(mcfont);
                nuke.setBackgroundDrawable(buttonGUI2);
                nuke.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        menu6.dismiss();
                        clientMessage(ChatColor.RED + 'I am not responsible for destruction!');
                        Level.spawnMob(getPlayerX(), getPlayerY() + 20, getPlayerZ(), 65);
                        Level.spawnMob(getPlayerX() + 1, getPlayerY() + 20, getPlayerZ(), 65);
                        Level.spawnMob(getPlayerX() - 1, getPlayerY() + 20, getPlayerZ() + 1, 65);
                        Level.spawnMob(getPlayerX(), getPlayerY() + 20, getPlayerZ() + 2, 65);
                        Level.spawnMob(getPlayerX() + 2, getPlayerY() + 20, getPlayerZ() - 1, 65);
                        Level.spawnMob(getPlayerX() - 2, getPlayerY() + 20, getPlayerZ() + 3, 65);
                        Level.spawnMob(getPlayerX(), getPlayerY() + 20, getPlayerZ() - 3, 65);
                    }
                }));
                menuLayout.addView(nuke);




                var firep = new android.widget.Button(ctx);
                firep.setText('Burn');
                firep.setTypeface(mcfont);
                firep.setBackgroundDrawable(buttonGUI2);
                firep.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Entity.setFireTicks(getPlayerEnt(), 120);
                        ModPE.showTipMessage(ChatColor.RED + 'Burn burn burn!');
                        menu6.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(firep);




                menu6 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                menu6.setBackgroundDrawable(buttonGUI);
                menu6.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
            } catch (error) {
                print('An error occured: ' + error);
            }
        }
    }));
}

function mess_menu() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var menuLayout = new android.widget.LinearLayout(ctx);
                var menuScroll = new android.widget.ScrollView(ctx);
                var menuLayout1 = new android.widget.LinearLayout(ctx);
                menuLayout.setOrientation(1);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayout);
                menuLayout1.addView(menuScroll);
                var x = new android.widget.Button(ctx);
                x.setText('Quitter');
                x.setTypeface(mcfont);
                x.setBackgroundDrawable(buttonGUI2);
                x.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        menu7.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(x);




                menu7 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                menu7.setBackgroundDrawable(buttonGUI);
                menu7.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
            } catch (error) {
                print('An error occured: ' + error);
            }
        }
    }));
}

function more_mods() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var menuLayout = new android.widget.LinearLayout(ctx);
                var menuScroll = new android.widget.ScrollView(ctx);
                var menuLayout1 = new android.widget.LinearLayout(ctx);
                menuLayout.setOrientation(1);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayout);
                menuLayout1.addView(menuScroll);
                var x = new android.widget.Button(ctx);
                x.setText('Quitter');
                x.setTypeface(mcfont);
                x.setBackgroundDrawable(buttonGUI2);
                x.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        menu9.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(x);



                var upjump = new android.widget.Button(ctx);
                upjump.setText('Super Jump');
                upjump.setTypeface(mcfont);
                upjump.setBackgroundDrawable(buttonGUI2);
                upjump.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        super_jump();
                        ModPE.showTipMessage(ChatColor.GREEN + 'Woo!');
                        menu9.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(upjump);


                var ac130 = new android.widget.Button(ctx);
                ac130.setText('AC-130');
                ac130.setTypeface(mcfont);
                ac130.setBackgroundDrawable(buttonGUI2);
                ac130.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        ac_130();
                        ac_130_gun();
                        menu9.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(ac130);



                var flame = new android.widget.Button(ctx);
                flame.setText('Flamethrower');
                flame.setTypeface(mcfont);
                flame.setBackgroundDrawable(buttonGUI2);
                flame.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        flamethrower();
                        menu9.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(flame);




                menu9 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                menu9.setBackgroundDrawable(buttonGUI);
                menu9.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
            } catch (error) {
                print('An error occured: ' + error);
            }
        }
    }));
}

function custom_menu() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var menuLayout = new android.widget.LinearLayout(ctx);
                var menuScroll = new android.widget.ScrollView(ctx);
                var menuLayout1 = new android.widget.LinearLayout(ctx);
                menuLayout.setOrientation(1);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayout);
                menuLayout1.addView(menuScroll);
                var x = new android.widget.Button(ctx);
                x.setText('Exit');
                x.setTypeface(mcfont);
                x.setBackgroundDrawable(buttonGUI2);
                x.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        menu10.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(x);


                var id = new android.widget.TextView(ctx);
                id.setText('ID');
                id.setTypeface(mcfont);
                id.setTextSize(19);
                menuLayout.addView(id);


                var text1 = new android.widget.EditText(ctx);
                text1.setHint('ID');
                text1.setTypeface(mcfont);
                text1.setInputType(numbers);
                menuLayout.addView(text1);



                var amount = new android.widget.TextView(ctx);
                amount.setText('Number you want');
                amount.setTextSize(19);
                amount.setTypeface(mcfont);
                menuLayout.addView(amount);


                var text2 = new android.widget.EditText(ctx);
                text2.setText('1');
                text2.setTypeface(mcfont);
                text2.setHint('Enter number');
                text2.setInputType(numbers);
                menuLayout.addView(text2);



                var data = new android.widget.TextView(ctx);
                data.setText('Texture');
                data.setTextSize(19);
                data.setTypeface(mcfont);
                menuLayout.addView(data);


                var text3 = new android.widget.EditText(ctx);
                text3.setText('0');
                text3.setTypeface(mcfont);
                text3.setHint('Texture');
                text3.setInputType(numbers);
                menuLayout.addView(text3);


                var stack = new android.widget.Button(ctx);
                stack.setText('1 Slot');
                stack.setTypeface(mcfont);
                stack.setBackgroundDrawable(buttonGUI2);
                stack.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        text2.setText('64');
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(stack);

                var add = new android.widget.Button(ctx);
                add.setText('Add');
                add.setTypeface(mcfont);
                add.setBackgroundDrawable(buttonGUI2);
                add.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(itemId, Amount, Data);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), itemId, Amount, Data);
                        }
                    }
                }));
                menuLayout.addView(add);



                var itemId = parseInt(text1.getText());
                var Amount = parseInt(text2.getText());
                var Data = parseInt(text3.getText());




                menu10 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                menu10.setBackgroundDrawable(buttonGUI);
                menu10.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
            } catch (error) {
                print('An error occured: ' + error);
            }
        }
    }));
}

function blocks_menu() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var menuLayout = new android.widget.LinearLayout(ctx);
                var menuScroll = new android.widget.ScrollView(ctx);
                var menuLayout1 = new android.widget.LinearLayout(ctx);
                menuLayout.setOrientation(1);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayout);
                menuLayout1.addView(menuScroll);

                var x = new android.widget.Button(ctx);
                x.setText('Quitter');
                x.setTypeface(mcfont);
                x.setBackgroundDrawable(buttonGUI2);
                x.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        menu12.dismiss();
                    }
                }));
                menuLayout.addView(x);



                var not = new android.widget.TextView(ctx);
                not.setText('* = Not obtainable yet!');
                not.setTypeface(mcfont);
                not.setTextSize(19);
                menuLayout.addView(not);


                var stone = new android.widget.Button(ctx);
                stone.setText('Stone');
                stone.setTypeface(mcfont);
                stone.setBackgroundDrawable(buttonGUI2);
                stone.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(1, 64);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), 1, 1, 0);
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(stone);


                var grass = new android.widget.Button(ctx);
                grass.setText('Grass');
                grass.setTypeface(mcfont);
                grass.setBackgroundDrawable(buttonGUI2);
                grass.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(2, 64);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), 2, 1, 0);
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(grass);


                var dirt = new android.widget.Button(ctx);
                dirt.setText('Dirt');
                dirt.setTypeface(mcfont);
                dirt.setBackgroundDrawable(buttonGUI2);
                dirt.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(3, 64);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), 3, 1, 0);
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(dirt);


                var cobble = new android.widget.Button(ctx);
                cobble.setText('Cobblestone');
                cobble.setTypeface(mcfont);
                cobble.setBackgroundDrawable(buttonGUI2);
                cobble.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(4, 64);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), 4, 1, 0);
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(cobble);



                var planks1 = new android.widget.Button(ctx);
                planks1.setText('Oak planks');
                planks1.setTypeface(mcfont);
                planks1.setBackgroundDrawable(buttonGUI2);
                planks1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(5, 64, 0);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), 5, 1, 0);
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(planks1);



                var planks2 = new android.widget.Button(ctx);
                planks2.setText('Spruce planks');
                planks2.setTypeface(mcfont);
                planks2.setBackgroundDrawable(buttonGUI2);
                planks2.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(5, 64, 1);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), 5, 1, 1);
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(planks2);


                var planks3 = new android.widget.Button(ctx);
                planks3.setText('Birch planks');
                planks3.setTypeface(mcfont);
                planks3.setBackgroundDrawable(buttonGUI2);
                planks3.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(5, 64, 2);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), 5, 1, 2);
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(planks3);


                var planks4 = new android.widget.Button(ctx);
                planks4.setText('Jungle planks');
                planks4.setTypeface(mcfont);
                planks4.setBackgroundDrawable(buttonGUI2);
                planks4.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(5, 64, 3);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), 5, 1, 3);
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(planks4);



                var bedrock = new android.widget.Button(ctx);
                bedrock.setText('Bedrock');
                bedrock.setTypeface(mcfont);
                bedrock.setBackgroundDrawable(buttonGUI2);
                bedrock.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(7, 64, 0);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), 7, 1, 0);
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(bedrock);



                var sand1 = new android.widget.Button(ctx);
                sand1.setText('Sand');
                sand1.setTypeface(mcfont);
                sand1.setBackgroundDrawable(buttonGUI2);
                sand1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(12, 64, 0);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), 12, 1, 0);
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(sand1);



                var ore1 = new android.widget.Button(ctx);
                ore1.setText('Gold block');
                ore1.setTypeface(mcfont);
                ore1.setBackgroundDrawable(buttonGUI2);
                ore1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(14, 64, 0);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), 14, 1, 0);
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(ore1);


                var ore2 = new android.widget.Button(ctx);
                ore2.setText('Iron block');
                ore2.setTypeface(mcfont);
                ore2.setBackgroundDrawable(buttonGUI2);
                ore2.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(15, 64, 0);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), 15, 1, 0);
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(ore2);


                var piston = new android.widget.Button(ctx);
                piston.setText('*Piston');
                piston.setTypeface(mcfont);
                piston.setBackgroundDrawable(buttonGUI2);
                piston.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(33, 64, 0);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), 33, 1, 0);
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(piston);



                var phead = new android.widget.Button(ctx);
                phead.setText('*Piston head');
                phead.setTypeface(mcfont);
                phead.setBackgroundDrawable(buttonGUI2);
                phead.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(34, 64, 0);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), 34, 1, 0);
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(phead)



                menu12 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                menu12.setBackgroundDrawable(buttonGUI);
                menu12.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
            } catch (error) {
                print('An error occured: ' + error);
            }
        }
    }));
}

function deco_menu() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var menuLayout = new android.widget.LinearLayout(ctx);
                var menuScroll = new android.widget.ScrollView(ctx);
                var menuLayout1 = new android.widget.LinearLayout(ctx);
                menuLayout.setOrientation(1);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayout);
                menuLayout1.addView(menuScroll);
                var x = new android.widget.Button(ctx);
                x.setText('Quitter');
                x.setTypeface(mcfont);
                x.setBackgroundDrawable(buttonGUI2);
                x.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        menu13.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(x);


                var sapling = new android.widget.Button(ctx);
                sapling.setText('Oak sapling');
                sapling.setTypeface(mcfont);
                sapling.setBackgroundDrawable(buttonGUI2);
                sapling.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(6, 0, 64);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), 6, 1, 0);
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(sapling);




                menu13 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                menu13.setBackgroundDrawable(buttonGUI);
                menu13.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
            } catch (error) {
                print('An error occured: ' + error);
            }
        }
    }));
}

function tools_menu() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var menuLayout = new android.widget.LinearLayout(ctx);
                var menuScroll = new android.widget.ScrollView(ctx);
                var menuLayout1 = new android.widget.LinearLayout(ctx);
                menuLayout.setOrientation(1);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayout);
                menuLayout1.addView(menuScroll);
                var x = new android.widget.Button(ctx);
                x.setText('Exit');
                x.setTypeface(mcfont);
                x.setBackgroundDrawable(buttonGUI2);
                x.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        menu14.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(x);


                var info1 = new android.widget.TextView(ctx);
                info1.setText('Diamond tools:');
                info1.setTypeface(mcfont);
                info1.setTextSize(18);
                menuLayout.addView(info1);


                var sword1 = new android.widget.Button(ctx);
                sword1.setText('Diamond sword');
                sword1.setTypeface(mcfont);
                sword1.setBackgroundDrawable(buttonGUI2);
                sword1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(276, 9999, 0);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), 276, 1, 0);
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(sword1);



                var pick1 = new android.widget.Button(ctx);
                pick1.setText('Diamond pickaxe');
                pick1.setTypeface(mcfont);
                pick1.setBackgroundDrawable(buttonGUI2);
                pick1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(278, 9999, 0);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), 278, 1, 0);
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(pick1);



                var sho1 = new android.widget.Button(ctx);
                sho1.setText('Diamond shovel');
                sho1.setTypeface(mcfont);
                sho1.setBackgroundDrawable(buttonGUI2);
                sho1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(277, 9999, 0);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), 277, 1, 0);
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(sho1);




                menu14 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                menu14.setBackgroundDrawable(buttonGUI);
                menu14.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
            } catch (error) {
                print('An error occured: ' + error);
            }
        }
    }));
}

function more_items() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var menuLayout = new android.widget.LinearLayout(ctx);
                var menuScroll = new android.widget.ScrollView(ctx);
                var menuLayout1 = new android.widget.LinearLayout(ctx);
                menuLayout.setOrientation(1);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayout);
                menuLayout1.addView(menuScroll);
                var x = new android.widget.Button(ctx);
                x.setText('Exit');
                x.setTypeface(mcfont);
                x.setBackgroundDrawable(buttonGUI2);
                x.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        menu15.dismiss();
                    }
                }));
                menuLayout.addView(x);




                var torch = new android.widget.Button(ctx);
                torch.setText('Torch');
                torch.setTypeface(mcfont);
                torch.setBackgroundDrawable(buttonGUI2);
                torch.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(50, 64, 0);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), 50, 1, 0);
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(torch);



                var fire = new android.widget.Button(ctx);
                fire.setText('Fire');
                fire.setTypeface(mcfont);
                fire.setBackgroundDrawable(buttonGUI2);
                fire.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Player.addItemInventory(51, 64, 0);
                        if (Level.getGameMode() == 1) {
                            Entity.setCarriedItem(getPlayerEnt(), 51, 1, 0);
                            Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                        }
                    }
                }));
                menuLayout.addView(fire);




                menu15 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                menu15.setBackgroundDrawable(buttonGUI);
                menu15.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
            } catch (error) {
                print('An error occured: ' + error);
            }
        }
    }));
}

function spawn_menu() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var menuLayout = new android.widget.LinearLayout(ctx);
                var menuScroll = new android.widget.ScrollView(ctx);
                var menuLayout1 = new android.widget.LinearLayout(ctx);
                menuLayout.setOrientation(1);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayout);
                menuLayout1.addView(menuScroll);
                var x = new android.widget.Button(ctx);
                x.setText('Exit');
                x.setTypeface(mcfont);
                x.setBackgroundDrawable(buttonGUI2);
                x.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        menu16.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(x);




                var cow = new android.widget.Button(ctx);
                cow.setText('Spawn cow');
                cow.setTypeface(mcfont);
                cow.setBackgroundDrawable(buttonGUI2);
                cow.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.spawnMob(getPlayerX() + 2, getPlayerY() + 1, getPlayerZ(), 11, "mob/cow.png");
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(cow);


                var sheep = new android.widget.Button(ctx);
                sheep.setText('Spawn sheep');
                sheep.setTypeface(mcfont);
                sheep.setBackgroundDrawable(buttonGUI2);
                sheep.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.spawnMob(getPlayerX() + 2, getPlayerY() + 1, getPlayerZ(), 13, "mob/sheep.tga");
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(sheep);



                var villager = new android.widget.Button(ctx);
                villager.setText('Spawn villager');
                villager.setTypeface(mcfont);
                villager.setBackgroundDrawable(buttonGUI2);
                villager.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.spawnMob(getPlayerX(), getPlayerY(), getPlayerZ(), 15, "mob/villager/butcher.png");
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(villager);


                var wolf = new android.widget.Button(ctx);
                wolf.setText('Spawn wolf/dog');
                wolf.setTypeface(mcfont);
                wolf.setBackgroundDrawable(buttonGUI2);
                wolf.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.spawnMob(getPlayerX() + 2, getPlayerY() + 1, getPlayerZ(), 14, "mob/wolf.png");
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(wolf);


                var pig = new android.widget.Button(ctx);
                pig.setText('Spawn pig');
                pig.setTypeface(mcfont);
                pig.setBackgroundDrawable(buttonGUI2);
                pig.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.spawnMob(getPlayerX() + 2, getPlayerY() + 1, getPlayerZ(), 11, "mob/pig.png");
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(pig);


                var chicken = new android.widget.Button(ctx);
                chicken.setText('Spawn chicken');
                chicken.setTypeface(mcfont);
                chicken.setBackgroundDrawable(buttonGUI2);
                chicken.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.spawnMob(getPlayerX() + 2, getPlayerY() + 1, getPlayerZ(), 10, "mob/chicken.png");
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(chicken);


                var cow2 = new android.widget.Button(ctx);
                cow2.setText('Spawn mooshroom');
                cow2.setTypeface(mcfont);
                cow2.setBackgroundDrawable(buttonGUI2);
                cow2.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.spawnMob(getPlayerX(), getPlayerY(), getPlayerZ(), 16, "mob/mooshroom.png");
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(cow2);



                var zombie = new android.widget.Button(ctx);
                zombie.setText('Spawn zombie');
                zombie.setTypeface(mcfont);
                zombie.setBackgroundDrawable(buttonGUI2);
                zombie.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.spawnMob(getPlayerX() + 2, getPlayerY() + 1, getPlayerZ(), 32, "mob/zombie.png");
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(zombie);


                var skelly = new android.widget.Button(ctx);
                skelly.setText('Spawn skeleton');
                skelly.setTypeface(mcfont);
                skelly.setBackgroundDrawable(buttonGUI2);
                skelly.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.spawnMob(getPlayerX() + 2, getPlayerY() + 1, getPlayerZ(), 34, "mob/skeleton.png");
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(skelly);


                var ender = new android.widget.Button(ctx);
                ender.setText('Spawn enderman');
                ender.setTypeface(mcfont);
                ender.setBackgroundDrawable(buttonGUI2);
                ender.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.spawnMob(getPlayerX() + 2, getPlayerY() + 1, getPlayerZ(), 38, "mob/enderman.tga");
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(ender);


                var sfish = new android.widget.Button(ctx);
                sfish.setText('Spawn silverfish');
                sfish.setTypeface(mcfont);
                sfish.setBackgroundDrawable(buttonGUI2);
                sfish.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.spawnMob(getPlayerX() + 2, getPlayerY() + 1, getPlayerZ(), 39, "mob/silverfish.png");
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(sfish);


                var spider = new android.widget.Button(ctx);
                spider.setText('Spawn spider');
                spider.setTypeface(mcfont);
                spider.setBackgroundDrawable(buttonGUI2);
                spider.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.spawnMob(getPlayerX() + 2, getPlayerY(), getPlayerZ(), 35, "mob/spider.tga");
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(spider);



                var creeper = new android.widget.Button(ctx);
                creeper.setText('Spawn creeper');
                creeper.setTypeface(mcfont);
                creeper.setBackgroundDrawable(buttonGUI2);
                creeper.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.spawnMob(getPlayerX() + 2, getPlayerY() + 1, getPlayerZ(), 33, "mob/creeper.png");
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(creeper);


                var pigman = new android.widget.Button(ctx);
                pigman.setText('Spawn zombie pigman');
                pigman.setTypeface(mcfont);
                pigman.setBackgroundDrawable(buttonGUI2);
                pigman.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.spawnMob(getPlayerX() + 2, getPlayerY() + 1, getPlayerZ(), 36, "mob/pigzombie.png");
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(pigman);



                var slime = new android.widget.Button(ctx);
                slime.setText('Spawn slime');
                slime.setTypeface(mcfont);
                slime.setBackgroundDrawable(buttonGUI2);
                slime.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.spawnMob(getPlayerX() + 2, getPlayerY() + 1, getPlayerZ(), 37, "mob/slime.png");
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(slime);



                var cart = new android.widget.Button(ctx);
                cart.setText('Spawn minecart');
                cart.setTypeface(mcfont);
                cart.setBackgroundDrawable(buttonGUI2);
                cart.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.spawnMob(getPlayerX() + 2, getPlayerY() + 1, getPlayerZ(), 84, "entity/minecart.png");
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                menuLayout.addView(cart);


                var mob = new android.widget.TextView(ctx);
                mob.setText('    0.11.0 mobs have been added!(version 0.2) :D');
                mob.setTypeface(mcfont);
                mob.setTextSize(19);
                menuLayout.addView(mob);



                var end = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
                end.setMax(100);
                end.setProgress(100);
                menuLayout.addView(end);




                menu16 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                menu16.setBackgroundDrawable(buttonGUI);
                menu16.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
            } catch (error) {
                print('An error occured: ' + error);
            }
        }
    }));
}


function welcome() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(ctx);
                layout.setOrientation(1);

                var welcome = new android.widget.TextView(ctx);
                welcome.setTextSize(18);
                welcome.setText("Welcome \n" + Player.getName(getPlayerEnt()) + "! \n\nPress to close!");
                welcome.setTypeface(mcfont);
                welcome.setTextColor(android.graphics.Color.parseColor('#FF93FF00'));
                welcome.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        welcome.dismiss();
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                layout.addView(welcome);


                welcome = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
                welcome.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                welcome.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.CENTER, 0, -110);
            } catch (err) {
                print('An error occured: ' + err);
            }
        }
    }));
}



function no_clip1() {
    var nc1;
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(ctx);
                layout.setOrientation(1);

                var nc1 = new android.widget.Button(ctx);
                nc1.setText('NO-CLIP');
                nc1.setTypeface(mcfont);
                nc1.setBackgroundDrawable(miniGUI);
                nc1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        //realHealth = Entity.getHealth(Player.getEntity());
                        setVelY(getPlayerEnt(), 0);
                        doNoclip = !doNoclip;
                        Player.setHealth(realHealth);
                    }
                }));
                layout.addView(nc1);


                nc1 = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
                nc1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                nc1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.CENTER, 0, 0);
            } catch (err) {
                print('An error occured: ' + err);
            }
        }
    }));
}


function no_clip2() {
    var nc2;
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(ctx);
                layout.setOrientation(1);

                var nc2 = new android.widget.Button(ctx);
                nc2.setText('-');
                nc2.setTypeface(mcfont);
                nc2.setBackgroundDrawable(miniGUI);
                nc2.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        speed = speed - 0.1;
                    }
                }));
                layout.addView(nc2);

                nc2 = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
                nc2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                nc2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.CENTER, 0, 50);
            } catch (err) {
                print('An error occured: ' + err);
            }
        }
    }));
}


function no_clip3() {
    var nc3;
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(ctx);
                layout.setOrientation(1);

                var nc3 = new android.widget.Button(ctx);
                nc3.setText('+');
                nc3.setTypeface(mcfont);
                nc3.setBackgroundDrawable(miniGUI);
                nc3.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        speed = speed + 0.1;
                    }
                }));
                layout.addView(nc3);


                nc3 = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
                nc3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                nc3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.CENTER, 0, -50);
            } catch (err) {
                print('An error occured: ' + err);
            }
        }
    }));
}



function jump(d) {
    var p = getPlayerEnt();
    var xrot = (getYaw(p) + 90) * Math.PI / 180;
    var yrot = -getPitch(p) * Math.PI / 180;
    var x = getPlayerX();
    var y = cury;
    var z = getPlayerZ();
    var newx = (x + d * Math.cos(xrot));
    var newy = (y + d * Math.sin(yrot));
    var newz = (z + d * Math.sin(xrot));
    setPosition(p, newx, newy, newz);
    cury = newy;
}



function modTick() {
    if (doNoclip) {
        //prevy = cury+0;
        //cury = getPlayerY();
        //ydiff = prevy - cury;
        //setPosition(getPlayerEnt(),getPlayerX(),prevy,getPlayerZ());
        Player.setHealth(20);
        jump(speed);
        setVelY(getPlayerEnt(), 0);
    } else {
        cury = getPlayerY();
        realHealth = getHealth();

        if (sprintMode == true) {
            {
                if (i == 1) {
                    Xpos = getPlayerX();
                    Zpos = getPlayerZ();
                    i = i + 1;
                } else if (i == 3) {
                    i = 1;
                    Xdiff = getPlayerX() - Xpos;
                    Zdiff = getPlayerZ() - Zpos;
                    setVelX(getPlayerEnt(), Xdiff * (gear / 3));
                    setVelZ(getPlayerEnt(), Zdiff * (gear / 3));
                    Xdiff = 0;
                    Zdiff = 0;
                }
                if (i != 1) {
                    i = i + 1;
                }
            }
        }
    }
}

function getHealth() {
    return Entity.getHealth(Player.getEntity());
}

function super_jump() {
    var sjump;
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(ctx);
                layout.setOrientation(1);

                var jump = new android.widget.Button(ctx);
                jump.setText('↑');
                jump.setBackgroundDrawable(miniGUI);
                jump.setTypeface(mcfont);
                jump.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        setVelY(getPlayerEnt(), 0.7);
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                layout.addView(jump);


                sjump = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
                sjump.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                sjump.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.CENTER, 0, -50);
            } catch (err) {
                print('An error occured: ' + err);
            }
        }
    }));
}

function blocksd() {
    if (instantbreak == true) {
        for (var b = 0; b < 256; b++)
            Block.setDestroyTime(b, 0);
    } else {
        for (var b = 0; b < 256; b++)
            Block.setDestroyTime(b, defaultDestroyTime[b]);
    }
}

function ac_130() {
    var ac130;
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(ctx);
                layout.setOrientation(1);

                var tnt = new android.widget.Button(ctx);
                tnt.setText('TNT');
                tnt.setBackgroundDrawable(miniGUI);
                tnt.setTypeface(mcfont);
                tnt.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.spawnMob(getPlayerX(), getPlayerY() - 1, getPlayerZ(), 65);
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                layout.addView(tnt);

                ac130 = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
                ac130.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                ac130.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 200, 83);
            } catch (err) {
                print('An error occured: ' + err);
            }
        }
    }));
}

function ac_130_gun() {
    var ac1302;
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(ctx);
                layout.setOrientation(1);

                var active = false;
                var gun = new android.widget.Button(ctx);
                gun.setText('GUN');
                gun.setTypeface(mcfont);
                gun.setBackgroundDrawable(miniGUI);
                gun.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(view, event) {
                        switch (event.getAction()) {
                            case 0:
                                active = true;
                                var playerYaw = Entity.getYaw(Player.getEntity());
                                var playerPitch = Entity.getPitch(Player.getEntity());
                                velY = Math.sin((playerPitch - 180) / 180 * Math.PI);
                                velX = Math.sin(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI);
                                velZ = -1 * Math.cos(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI);
                                arrow = Level.spawnMob(Player.getX(), Player.getY() + 1, Player.getZ(), 80);
                                setVelX(arrow, velX);
                                setVelY(arrow, velY);
                                setVelZ(arrow, velZ);
                                break;
                            case 1:
                                active = false;
                                var playerYaw = Entity.getYaw(Player.getEntity());
                                var playerPitch = Entity.getPitch(Player.getEntity());
                                velY = Math.sin((playerPitch - 180) / 180 * Math.PI);
                                velX = Math.sin(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI);
                                velZ = -1 * Math.cos(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI);
                                arrow = Level.spawnMob(Player.getX(), Player.getY() + 1, Player.getZ(), 80);
                                setVelX(arrow, velX);
                                setVelY(arrow, velY);
                                setVelZ(arrow, velZ);
                                Level.playSound(Entity.getX(arrow), Entity.getY(arrow), Entity.getZ(arrow), "random.break", 100, 30);
                                break;
                        }
                        return true;
                    }
                }));
                layout.addView(gun);



                ac1302 = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
                ac1302.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                ac1302.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM, 200, 83);
            } catch (err) {
                print('An error occured: ' + err);
            }
        }
    }));
}

function flamethrower() {
    var flamethrower;
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(ctx);
                layout.setOrientation(1);

                var flamethrower = new android.widget.Button(ctx);
                flamethrower.setText('F');
                flamethrower.setBackgroundDrawable(miniGUI);
                flamethrower.setTypeface(mcfont);
                flamethrower.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        Level.setTile(getPlayerX() + 3, getPlayerY() - 1, getPlayerZ() - 1, 51);
                        Level.setTile(getPlayerX() + 2, getPlayerY() - 1, getPlayerZ() + 1, 51);
                        Level.setTile(getPlayerX() + 2, getPlayerY() - 1, getPlayerZ() - 1, 51);

                        Level.setTile(getPlayerX() - 3, getPlayerY() - 1, getPlayerZ() + 1, 51);
                        Level.setTile(getPlayerX() - 2, getPlayerY() - 1, getPlayerZ() - 1, 51);
                        Level.setTile(getPlayerX() - 2, getPlayerY() - 1, getPlayerZ() - 1, 51);

                        Level.setTile(getPlayerX(), getPlayerY() - 1, getPlayerZ(), 51);

                        Level.setTile(getPlayerX() + 1, getPlayerY() - 1, getPlayerZ() - 2, 51);
                        Level.setTile(getPlayerX() + 1, getPlayerY() - 1, getPlayerZ() + 2, 51);

                        Level.setTile(getPlayerX() + 2, getPlayerY() - 1, getPlayerZ() - 2, 51);
                        Level.setTile(getPlayerX() - 2, getPlayerY() - 1, getPlayerZ() + 2, 51);
                    }
                }));
                layout.addView(flamethrower);


                flamethrower = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
                flamethrower.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                flamethrower.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.CENTER, 0, 86);
            } catch (err) {
                print('An error occured: ' + err);
            }
        }
    }));
}

function speedGUI() {
    var s;
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(ctx);
                layout.setOrientation(1);

                var sh = new android.widget.Button(ctx);
                sh.setText('+++');
                sh.setTypeface(mcfont);
                sh.setBackgroundDrawable(miniGUI);
                sh.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        sprintMode = true;
                        Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
                    }
                }));
                layout.addView(sh);


                s = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
                s.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                s.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, -70, 150);
            } catch (err) {
                print('An error occured: ' + err);
            }
        }
    }));
}

function freeze() {
    var fre;
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(ctx);
                layout.setOrientation(1);

                var fg = new android.widget.Button(ctx);
                fg.setText('| |');
                fg.setBackgroundDrawable(miniGUI);
                fg.setTypeface(mcfont);
                fg.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!freezeCheck) {
                            freezeCheck = true;
                            ModPE.setGameSpeed(0);
                            fg.setText('>');
                        } else {
                            freezeCheck = false;
                            ModPE.setGameSpeed(20);
                            fg.setText('| |');
                        }
                    }
                }));
                layout.addView(fg);


                fre = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
                fre.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                fre.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 70, 150);
            } catch (err) {
                print('An error occured: ' + err);
            }
        }
    }));
}
