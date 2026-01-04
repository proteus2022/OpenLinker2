---
title: nr_micro_shell 锛?杞婚噺绾у崟鐗囨満鍛戒护琛屼氦浜掗」鐩?
date: 2024-03-18
authors: 杞浇
tags: [鍏朵粬]
---

<!-- truncate -->

<br /> 


## 1銆佷粙缁?

鍦ㄨ繘琛岃皟璇曞拰缁存姢鏃讹紝甯稿父闇€瑕佷笌鍗曠墖鏈鸿繘琛屼氦浜掞紝鑾峰彇銆佽缃煇浜涘弬鏁版垨鎵ц鏌愪簺鎿嶄綔锛?*nr_micro_shell**姝ｆ槸涓烘弧瓒宠繖涓€闇€姹傦紝閽堝璧勬簮杈冨皯鐨凪CU缂栧啓鐨勫熀鏈懡浠よ宸ュ叿銆傝櫧鐒禦T_Thread缁勪欢涓凡缁忔彁渚涗簡寮哄ぇ鐨?*finsh**鍛戒护琛屼氦浜掑伐鍏凤紝浣嗗浜嶳OM銆丷AM璧勬簮杈冨皯鐨勫崟鐗囨満锛?*finsh**杩樻槸鐣ユ樉鐨勫簽澶э紝鍦ㄨ繖浜涘钩鍙颁笂锛岃嫢浠嶆兂淇濈暀鍩烘湰鐨勫懡浠よ浜や簰鍔熻兘锛?*nr_micro_shell**鏄竴涓笉閿欑殑閫夋嫨銆?

**nr_micro_shell**鍏锋湁浠ヤ笅浼樼偣

1.鍗犵敤璧勬簮灏戯紝浣跨敤绠€鍗曪紝鐏垫椿鏂逛究銆備娇鐢ㄨ繃绋嬪彧娑夊強涓や釜shell_init()鍜宻hell()涓や釜鍑芥暟锛屾棤璁烘槸浣跨敤RTOS杩樻槸瑁告満閮藉彲浠ユ柟渚跨殑搴旂敤璇ュ伐鍏凤紝涓嶉渶瑕侀澶栫殑缂栫爜宸ヤ綔銆?

2.浜や簰浣撻獙濂姐€傚畬鍏ㄧ被浼间簬linux shell鍛戒护琛岋紝褰撲覆鍙ｇ粓绔敮鎸丄NSI锛堝Hypertrm缁堢锛夋椂锛屽叾涓嶄粎鏀寔鍩烘湰鐨勫懡浠よ浜や簰锛岃繕鎻愪緵Tab閿懡浠よˉ鍏紝鏌ヨ鍘嗗彶鍛戒护锛屾柟鍚戦敭绉诲姩鍏夋爣淇敼鍔熻兘銆?

3.鎵╁睍鎬уソ銆?*nr_micro_shell**涓虹敤鎴锋彁渚涜嚜瀹氫箟鍛戒护鐨勬爣鍑嗗嚱鏁板師鍨嬶紝鍙渶瑕佹寜鐓у懡浠ょ紪鍐欏懡浠ゅ嚱鏁帮紝骞舵敞鍐屽懡浠ゅ嚱鏁帮紝鍗冲彲浣跨敤鍛戒护銆?

**nr_micro_shell**鍜岀浉鍚岄厤缃笅鐨?*finsh** 锛坒insh涓嶄娇鐢╩sh锛夊崰鐢ㄨ祫婧愬姣?

|    | 鍘熷宸ョ▼  | 娣诲姞nr_micro_shell澧炲姞閲?| 娣诲姞finsh澧炲姞閲?
|--- | ----- | ------------------- | ----------
|ROM | 63660 | +3832               | +26908
|RAM | 4696  | +1104               | +1304

涓よ€呴厤缃兘涓?

- 鏈€澶?鏉″巻鍙插懡浠ゃ€?
- 鏀寔Tab琛ュ叏 銆?
- 鍛戒护琛屾渶澶ч暱搴︿负100銆?
- 鏈€澶?0涓懡浠ゅ弬鏁般€?
- 鍛戒护琛岀嚎绋嬪爢鏍堜负512瀛楄妭銆?


### 1.1 鐩綍缁撴瀯

鍚嶇О       | 璇存槑
-------- | --------------------------------------------------------------------------------------------
docs     | 鏂囨。鐩綍锛屽寘鍚紨绀虹殑GIF鍥剧墖绛?
examples | 渚嬪瓙鐩綍锛屽寘鎷懡浠ゅ嚱鏁扮ず渚嬶細 **_nr_micro_shell_commands.c_** 鍜孯T_Thread涓嬩娇鐢ㄧず渚?**_nr_micro_shell_thread.c_**
inc      | 澶存枃浠剁洰褰?
src      | 婧愪唬鐮佺洰褰?

### 1.2 璁稿彲璇?

nr_micro_shell package 閬靛惊 MIT 璁稿彲锛岃瑙?`LICENSE` 鏂囦欢銆?

### 1.3 渚濊禆

鏃犱緷璧?

<br /> 

## 2銆丷T_Thread 涓?ENV 宸ュ叿浣跨敤nr_micro_shell package

RT_Thread 浣跨敤 nr_micro_shell package package 闇€瑕佸湪 RT-Thread 鐨勫寘绠＄悊鍣ㄤ腑閫夋嫨瀹冿紝鍏蜂綋璺緞濡備笅锛?

```
RT-Thread online packages
    tools packages ---> 
        [*] nr_micro_shell:Lightweight command line interaction tool. --->
```

鐩稿叧鐨勮缃湪鎸変笅`sapce`閿€変腑鍚庯紝鎸塦enter`鍙繘琛岀浉鍏冲弬鏁伴厤缃€傜劧鍚庤 RT-Thread 鐨勫寘绠＄悊鍣ㄨ嚜鍔ㄦ洿鏂帮紝鎴栬€呬娇鐢?`pkgs --update` 鍛戒护鏇存柊鍖呭埌 BSP 涓€?

鑻ユ偍闇€瑕佽繍琛岀ず渚嬶紝璇蜂繚璇丷T_Thread閰嶇疆涓殑`Using console for kt_printf.`閫夐」鏄鎵撳紑鐨勶紝kt_printf鍙互姝ｅ父宸ヤ綔锛屼笖`Use components automatically initialization.`閫夐」鎵撳紑銆傜紪璇戠洿鎺ヤ笅杞芥垨浠跨湡渚垮彲浠ヤ娇鐢╪r_micro_shell銆傚懡浠よ绌虹櫧鏃舵寜Tab锛屽彲鏄剧ず鎵€鏈夋敮鎸佺殑鍛戒护锛屾祴璇曠ず渚嬪懡浠ゅ彲瑙乨oc/pic涓嬬殑浣跨敤绀轰緥鍔ㄥ浘銆傝嚜瀹氫箟鍛戒护杩囩▼锛屽弬鐓т笅鏂?*3\. 瑁告満涓嬩娇鐢╪r_micro_shell package**涓殑鏂规硶銆?

<br /> 

## 3銆佽８鏈轰笅浣跨敤nr_micro_shell package

### 3.1 閰嶇疆:

鎵€鏈夐厤缃伐浣滈兘鍙互鍦?**_nr_micro_shell_config.h_** 涓畬鎴愩€傛湁鍏宠缁嗕俊鎭紝璇峰弬瑙佹枃浠朵腑鐨勬敞閲娿€?

### 3.2 鐢ㄦ硶:

- 纭繚鎵€鏈夋枃浠堕兘宸叉坊鍔犲埌椤圭洰涓€?

- 纭繚 **_nr_micro_shell_config.h_** 涓殑瀹忓嚱鏁?shell_printf()锛宎nsi_show_char()"鍙互鍦ㄩ」鐩腑姝ｅ父浣跨敤銆?

- 浣跨敤绀轰緥濡備笅

```c
#include "nr_micro_shell.h"

int main(void)
{
    /* 鍒濆鍖?*/
    shell_init();

    while(1)
    {
        if(USART GET A CHAR 'c')
        {
            /* nr_micro_shell鎺ユ敹瀛楃 */
            shell(c);
        }
    }
}
```

寤鸿鐩存帴浣跨敤纭欢杈撳叆鍓嶏紝寤鸿浣跨敤濡備笅浠ｇ爜(纭繚鍙互姝ｅ父鎵撳嵃淇℃伅)锛岄獙璇乶r_micro_shell鏄惁鍙互姝ｅ父杩愯
```c
#include "nr_micro_shell.h"

int main(void)
{
    unsigned int i = 0;
    //鍖归厤濂界粨鏉熺閰嶇疆 NR_SHELL_END_OF_LINE 0
    char test_line[] = "test 1 2 3\n"
    /* 鍒濆鍖?*/
    shell_init();
    
    /* 鍒濇娴嬭瘯浠ｇ爜 */
    for(i = 0; i < sizeof(test_line)-1; i++)
    {
        shell(test_line[i]);
    }

    /* 姝ｅ紡宸ヤ綔浠ｇ爜 */
    while(1)
    {
        if(USART GET A CHAR 'c')
        {
            /* nr_micro_shell鎺ユ敹瀛楃 */
            shell(c);
        }
    }
}
```

### 3.3 娣诲姞鑷繁鐨勫懡浠?

**STEP1**:

鎮ㄩ渶瑕佸湪**nr_micro_shell_commands.c***涓疄鐜颁竴涓懡浠ゅ嚱鏁般€傚懡浠ゅ嚱鏁扮殑鍘熷瀷濡備笅

```c
void your_command_funtion(char argc, char *argv)
{
    .....
}
```

**argc**鏄弬鏁扮殑鏁扮洰銆?*argv**瀛樺偍姣忎釜鍙傛暟鐨勮捣濮嬪湴鍧€鍜屽唴瀹广€傚鏋滆緭鍏ュ瓧绗︿覆鏄?

```c
test -a 1
```

鍒?*argc**涓?锛?*argv**鐨勫唴瀹逛负

```c
-------------------------------------------------------------
0x03|0x08|0x0b|'t'|'e'|'s'|'t'|'\0'|'-'|'a'|'\0'|'1'|'\0'|
-------------------------------------------------------------
```

濡傛灉鎯崇煡閬撶涓€涓垨绗簩涓弬鏁扮殑鍐呭锛屽簲璇ヤ娇鐢?

```c
/* "-a" */
printf(argv[argv[1]])
/* "1" */
printf(argv[argv[2]])
```

**STEP2**:
鍦ㄤ娇鐢ㄥ懡浠ゅ墠闇€瑕佹敞鍐屽懡浠わ紝鍏辨湁涓ょ鏂规硶娉ㄥ唽鍛戒护

1.褰撻厤缃枃浠朵腑NR_SHELL_USING_EXPORT_CMD鏈瀹氫箟锛屽湪**static_cmd[]**琛ㄤ腑鍐欏叆

```c
const static_cmd_st static_cmd[] =
{
   .....
   {"your_command_name",your_command_funtion},
   .....
   {"\0",NULL}
};
```

**_娉ㄦ剰锛氫笉瑕佸垹闄"\0"锛孨ULL}锛乢**

2.褰撻厤缃枃浠朵腑NR_SHELL_USING_EXPORT_CMD琚畾涔夛紝涓擭R_SHELL_CMD_EXPORT()鏀寔浣跨敤鐨勭紪璇戝櫒鏃讹紝鍙互浣跨敤浠ヤ笅鏂瑰紡娉ㄥ唽鍛戒护
```c
NR_SHELL_CMD_EXPORT(your_command_name,your_command_funtion);
```

<br /> 

## 4銆乴inux涓嬩娇鐢╪r_micro_shell浠跨湡

鍦ㄥ伐绋媊./examples/simulator/`鐩綍涓嬪瓨鏀剧潃nr_micro_shell浠跨湡浠ｇ爜锛屼粛鍦╜./examples/nr_micro_shell_commands.c`鏂囦欢涓寜涓婅堪鏂瑰紡娣诲姞鑷畾涔夊懡浠わ紝娣诲姞瀹屾垚鍚庡彲浠ヤ娇鐢╩ake鍛戒护缂栬瘧婧愮爜锛岀敓浜х殑鍙墽琛屾枃浠朵负`./examples/simulator/out/nr_micro_shell`鎴朻./examples/simulator/out/nr_micro_shell_db`銆傚彲浣跨敤鐨刴ake鍛戒护濡備笅
```sh
# 缂栬瘧鍙墽琛屾枃浠?
make
# 缂栬瘧鍙豢鐪熸墽琛屾枃浠?
make debug
# 娓呴櫎缂栬瘧鐢熸垚鏂囦欢
make clean
```

<br /> 

## 5銆佹敞鎰忎簨椤?

鏍规嵁浣犵殑浣跨敤涔犳儻浣跨敤NR_SHELL_USING_EXPORT_CMD閫夋嫨鍛戒护娉ㄥ唽鏂瑰紡銆?

浣跨敤娉ㄥ唽琛ㄦ敞鍐屽懡浠ゆ椂锛岀‘淇濇偍鐨勫伐绋嬩腑瀛樺湪娉ㄥ唽琛?

```c
const static_cmd_st static_cmd[] =
{
   .....
   {"\0",NULL}
};
```

浣跨敤NR_SHELL_CMD_EXPORT()鏃剁‘淇濓紝NR_SHELL_CMD_EXPORT()鏀寔浣跨敤鐨勭紪璇戝櫒锛屽惁鍒欎細鎶ラ敊銆?

nr_micro_shell 涓嶆敮鎸丒SC閿瓑鎺у埗閿紙鎺у埗绗︼級銆?

 
<br /> 


**椤圭洰鍦板潃锛?* https://github.com/Nrusher/nr_micro_shell

