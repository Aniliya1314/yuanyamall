Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:[
      {
        year: '今天',
        hours:'6:35',
        type: '已签收',
        lo: '感谢使用UPS快运，期待再次为您服务',
        imgs: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADxklEQVRYR82Z/VEbQQzFnyoIVBBTAbgCkBsAKoipIKQCSAWBCoAKgAZOpIJABUAFSQfKvIvWWeDudn3BhJ1h/Idv7Z/1+SQEI0/TNNsisgNgC8AkXvNPuwXwAICv16rK16WPLHPDzAjyGcAeodz9u4jcAPgVIPnHEXzN3fdEZDNgrwCcqirBq04VoJmtAfgGYB5Q5wCuVJVgxRP399x9LiLbAHj/S839IqCZzQnn7ncicqyqtNjoY2Y77n4iIh8BHKgqrdp7BgHN7Mzd9wPsZDRVx0UzOwyvnKvqQd9ndwKGSy7dfcpEGBvgpR9kZlvufiMiFtZ8ETJ9gObu6wFXFWclmL73aYyAvFfV/efPvQDM3DqpCeKxYPm9gHwQkcvn7n4CyISIAF6ZWwcsybL0A8B+njgLwIi7ewBfVfVVE6LWypE4RwA2kvdywHN3n8xmM3aH4jGzYwD8sJqjteWpaZpbEblVVZY3tIDRIWi93g+Kevgpo2FX4Z8WCJmhbHN5srFId7Y+1kkihRUfEuCJu28NWS9ZjJ0kgNbYwtx90OJshSzyCTA6yaBFm6Zh6aEVDxNgij22oM6TAFU13Um/dCkXm5kPeSo8SvceqeqGZCZdHyorzwFrqLqeqQRk7/8JYErAY7qplBxvCcgfFslyTkA2a/qbWdl73howvm+LgCyOF6XaNxbQzKgdb1L41Lg44pAG2yVgMWizCwzcokRLbshqJYt/66Elvq9NwpUARlc6C+VNzbeoDm8KmCnthTqOok+pttEl1d4aMOm5tgvF4ES4xz6ptjRgSuexSZKJTtYttj4ORVTLfQW/Oubbges1ykxAXsVo0NuNlkwSJlVbZtp0VtXpO6uDLH/X77/VRVuh3OZIWS0WVtyLqeyPZ7PZZCG3AGxSA9WqmRUDUg/e5XKL2VcSrElBD/bsCnDeHxLGLwVrZBfdSyt2JsuSEr/EOQTI5KD1/kr+AOR8mmLxvw1NjD0RWYy8L8ZOAOyh01VtEwZifHjszBQIXb0bkNVrspJPCzWWCpo5wD1i69p0OqVTDC0fYoheKWQIDmbto6pSOz45vcsjd2fr4uKRAT1qO1qyKltkjJicFOddM1Fp/UZ3cxY+VNXT0hcu876ZcVPLZKSaf+LWoovzB7J9DdUKxec/LzCZiLE9o9XGLzCzxGEQ89fSmgSkZRnQVau5iDMmHi3FQnwRXiner54volay4xzGYpwrXMZmawHu+J645s9/AHgY+BS2FLF89uTVl+hdsRUBnr58Egm1eDR22unfEFy4j0q03/IbwmvEQvsnAAAAAElFTkSuQmCC',
      },
      {
        year: '2019-3-22',
        hours: '8:35',
        type: '派送中',
        lo: '快件已到达【无锡】,UPS快运95338正在为您派件',
        imgs: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAD1UlEQVRYR81Y7VEbMRDdrSBQQUwFgQpg1QCkApwKQiqIU0GggkAHTgO3UAFQAU4FIRVs5l1Wjny2TpLxMOwMw4+T5Kf9ePtWTG/ceJf4VHWC80RksatztwbYdd0xM58R0SERnWQA3RLRg5nNQwh324BuAqiqe0T0mYguiGjPzH4xM0DAYw9E9OwgsA7AJ2Z2wszv/dslEV2JSFxXxFwNUFW/ApiZMTNfE9G1iABU0VQVYKdmNmVmI6KZiFwVNxJREaB7Td0jN374VjnmOTojonP3uJS8OQrQb67utZNaj5U8g3PN7JaZfxPRx7FzswATcMgzgKvOmxJAfEdkHCTyE57cmC4bAXpYn7wIdg4uXiAB+Y6IjjY5IQfw3swOmHmya88NvesgF8z8JCJHw+9rAFUVSYyKxY2qqrQmpGNrPJ3uieiLiICKlrYCMIaWiH6KyPSlP9yyX1VBXadEdJBGbQhwZmYXzHzY0q78YqCO2FHmIgJKqjZQkJk9MPOliCCKvQ0BouxvRASdosoGPJnuQXoUeS7doKoI77mI7K8BVFXcHoTclHuqij3ZXgyEVTf9Rz3oOMjFJYalB4HezM5CCL0iqTH3HryeNREpdqt0c9d1z2ilMYrLzV3XgdkXLcWReH0MY2tErs1sEkLoo5J6EE38W5qglV7Evp15MNJc9PwQIPrivAZYXOOJDQm2ySCtqgsOB6gq6O3HCkBXGU9eddB3TeYcBppJrRmcA4zFCj5c9B58CUCvPBDsIwSqI4QcO3bKaupGSV7/B+ggkUtNIY7hKLj7k4igS1TZxhAnAKuLpLKCIyjQYVXqZIuklWYKBD301m0tYSOfczSDNnMqIgelWCQ5W1qaft+vkW6qimKFWOmrP6WZ6lbXGN7qMI+2OpwybDM597jInDMzKrVoZnaHGbrkQW+30xACxtbe1uSWz71oT8XJzUMNz4NeMAj1B6Nl+qyM/8i/2rMgFMCfWbmFQQbyG3ru1QUrxMpwzNgk+ZGc31tlVzHOIwuqJX88o+s6KFuMgyvy+yUgxvKZiPoJMoQAPbhi2bHT5Te0XpMqbrlEVONmtu9jxtrsPTq4+2AdRcTOB3fIAB9vs68WxacPPJ0xMwbr7PTf4jVvqwglwP1x+skKiqIcT6b/D3jRclFbpI1NoJ2WMHPjpeux5kmlCDD+kKri6W3mz2cAiumvSkp5lUIvAhie7/D8tjKg56JQDdBDAyIGUMzOCHtPxJGUwaFO1CDu+NcTuYcToDD3VudzE8D0lsmj5GGu5XmLg5erHzuraKY16ZM0eDuP6NteonXfXy2lP0ckWS0GAAAAAElFTkSuQmCC',
      },
      {
      year:'2019-3-21',
      hours: '11:24',
      type: '运输中',
      lo: '快件在【湖南省】已装车，准备发往【无锡',
        imgs: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFCklEQVRYR7WYPW4cRxCFqwDnli5giScwdQKxB1As6gSmYgemTmDqBKYA56ZSJ6YyR1PkCUidwKRjA6ZDR2V84+pBz3/vSmqAILmz0/36VdWr163ymUbbts/LqZqmuf4cU+s+k5jZUxF5KSJH8fNoYZ4HEbmKnw8ppbtd19sJoJkB6AcROWYhd/9HVQFwGwvn34fx/6G7H6nq1/H/pYi8SynxTtWoAhiM/QJbAeoCVlJKLLg5zIwN8e5JgAXg6xpGNwGa2YmI/CQihPGdiJyllAjdzsPMmOMsosAcb1JKbHZxrAI0M1g7cfePqnpcs+Ma1ETE3S9V9VsRuUgpvV56bxFgBici70XkdF/WlhYONs9F5Ls1kLMAC3BvU0qE5IsNMyPEiyAnACPnCO37lBL598VHAZLCGeTkAGBU642736vq0VJYCY+7P1dV5ATZ2Kto8s5jvitVfSIiz8pcHwO0EN6DpYIwM0L+Y0Er4Nh5leSs5CTi/0fIV8rf6wGGCAMQRk5XJiLspACSc+HuF1GNJDw5uzebZsYcNIKUxbwEeBmq/3RrkbZtb0Nwn8VGsrbRymCzulOURESo7+hOKaWuW3UAI/egd5W9ImdoebDdVzkRCDbJo/OU0pt9qqtg8TFEZYCElG7RU7s1edu2JDVC2yd1aBtViJGgL8Nm7s9bU3bPoy3+Fl3mPAPswts0zZIrmUxesD6RIxYJNjEJtMa3sTjmgc8eqer9Evi2bR9ymDPAv0XkOse9aqv/73aS1KV0iMivIvJCRP4Ska+in5fTU1AwTmr1Viyi8ySldJABeplPxSL0TMIoqvpxLD1FUt+QG4U+du5FRJAObNm/qvq7iCBFGQjP+B7pAFCkrVOALGUpJdVCXiZtrW1bKoqkZ8y6DzP7WUS+d/c/VfWbvDl3v1ZVAFGRgzw0MwQeB84mumoNgB34QmtTCfDVWGzNjAWY6JW7n6kqfxMSFiwnhyUcD/JyOSczQQQ9F0BdrkfH4h0cTS9NRaFsAszV3XWWomeWk2eWFgU6L1g48PzO7BGg8AMDgJMQRyhucskH/TB3t4s3JFUijw+3msAkxPHBbJHwLPLwdlzhozwCNGPQ6GPu3BonTmVJLQZFEiB63Rm/FGGl0mhrObHLCr2H0cjPidDTFsm5pmm6iq4ZyAwKwDu9ULN4SunxDMDMQPeoyKPuOEmFFkowKLTi82r2gvVel8etblLJ8QLFQuUBaGIEiq4yyOOSiRrmYi2qfNLqsherMgtzi5nZII8L9ji50XGqxqxZCORZ83pFr5oxvjQGGOwdquqmfcvrhNnAVfVtd2fDulJ5MNhFYK07rW260NmpYY1qxkJRqYuWf2mBqNaHpmmO9mSvSzNaJHPkdSaHJnfHLUMzu6i27wEKU4G7HpjZrVSJ0Jq7H3AQWzw0jYR19cQ/XjQsUncFF1K0S+51NxhhcJePnUWy5sN0tXU3s1N3Pw4Hg2GoumorbzDmzuFrVx/9iT96cXW4t0IakUJXOWbA3OIlwdblUQZJu0LEq1jZAhjCjhjjC1dvMKqu39z9PI6Zn3T2jWLg0E86cPnJpdT+129FTmL9OaBTBN05wt2vmqb5sMVWyNdLrlIinFyb4LZPaiKyyWAJIASYvoy7YQCW8Hf9GYnid9zZ8CegCGM+LbIhCq/6YL8TwJLRsO4c1mln+dwyIDQsfd4AsrVzoe0FcC6swW7/aBeW1tLkP5TpHkoZVdZKAAAAAElFTkSuQmCC',
    },
    {
      year: '2019-3-20',
      hours: '9:04',
      type: '已揽件',
      lo: 'UPS速运 已收取快递',
      imgs: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFCklEQVRYR7WYPW4cRxCFqwDnli5giScwdQKxB1As6gSmYgemTmDqBKYA56ZSJ6YyR1PkCUidwKRjA6ZDR2V84+pBz3/vSmqAILmz0/36VdWr163ymUbbts/LqZqmuf4cU+s+k5jZUxF5KSJH8fNoYZ4HEbmKnw8ppbtd19sJoJkB6AcROWYhd/9HVQFwGwvn34fx/6G7H6nq1/H/pYi8SynxTtWoAhiM/QJbAeoCVlJKLLg5zIwN8e5JgAXg6xpGNwGa2YmI/CQihPGdiJyllAjdzsPMmOMsosAcb1JKbHZxrAI0M1g7cfePqnpcs+Ma1ETE3S9V9VsRuUgpvV56bxFgBici70XkdF/WlhYONs9F5Ls1kLMAC3BvU0qE5IsNMyPEiyAnACPnCO37lBL598VHAZLCGeTkAGBU642736vq0VJYCY+7P1dV5ATZ2Kto8s5jvitVfSIiz8pcHwO0EN6DpYIwM0L+Y0Er4Nh5leSs5CTi/0fIV8rf6wGGCAMQRk5XJiLspACSc+HuF1GNJDw5uzebZsYcNIKUxbwEeBmq/3RrkbZtb0Nwn8VGsrbRymCzulOURESo7+hOKaWuW3UAI/egd5W9ImdoebDdVzkRCDbJo/OU0pt9qqtg8TFEZYCElG7RU7s1edu2JDVC2yd1aBtViJGgL8Nm7s9bU3bPoy3+Fl3mPAPswts0zZIrmUxesD6RIxYJNjEJtMa3sTjmgc8eqer9Evi2bR9ymDPAv0XkOse9aqv/73aS1KV0iMivIvJCRP4Ska+in5fTU1AwTmr1Viyi8ySldJABeplPxSL0TMIoqvpxLD1FUt+QG4U+du5FRJAObNm/qvq7iCBFGQjP+B7pAFCkrVOALGUpJdVCXiZtrW1bKoqkZ8y6DzP7WUS+d/c/VfWbvDl3v1ZVAFGRgzw0MwQeB84mumoNgB34QmtTCfDVWGzNjAWY6JW7n6kqfxMSFiwnhyUcD/JyOSczQQQ9F0BdrkfH4h0cTS9NRaFsAszV3XWWomeWk2eWFgU6L1g48PzO7BGg8AMDgJMQRyhucskH/TB3t4s3JFUijw+3msAkxPHBbJHwLPLwdlzhozwCNGPQ6GPu3BonTmVJLQZFEiB63Rm/FGGl0mhrObHLCr2H0cjPidDTFsm5pmm6iq4ZyAwKwDu9ULN4SunxDMDMQPeoyKPuOEmFFkowKLTi82r2gvVel8etblLJ8QLFQuUBaGIEiq4yyOOSiRrmYi2qfNLqsherMgtzi5nZII8L9ji50XGqxqxZCORZ83pFr5oxvjQGGOwdquqmfcvrhNnAVfVtd2fDulJ5MNhFYK07rW260NmpYY1qxkJRqYuWf2mBqNaHpmmO9mSvSzNaJHPkdSaHJnfHLUMzu6i27wEKU4G7HpjZrVSJ0Jq7H3AQWzw0jYR19cQ/XjQsUncFF1K0S+51NxhhcJePnUWy5sN0tXU3s1N3Pw4Hg2GoumorbzDmzuFrVx/9iT96cXW4t0IakUJXOWbA3OIlwdblUQZJu0LEq1jZAhjCjhjjC1dvMKqu39z9PI6Zn3T2jWLg0E86cPnJpdT+129FTmL9OaBTBN05wt2vmqb5sMVWyNdLrlIinFyb4LZPaiKyyWAJIASYvoy7YQCW8Hf9GYnid9zZ8CegCGM+LbIhCq/6YL8TwJLRsO4c1mln+dwyIDQsfd4AsrVzoe0FcC6swW7/aBeW1tLkP5TpHkoZVdZKAAAAAElFTkSuQmCC',
    },
      {
      year: '2019-3-19',
      hours: '19:04',
      type:'已发货',
      lo:'包裹正在等待揽件',
        imgs:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEg0lEQVRYR8WYjXEURxCFuyNARIAUASgCqzcBThFYigARAUcEFhFIRABO4EZEIDkCmwgQEbTrG/Vu7d3tzsweGE/V1VZd7c686Z/Xr1vlwJVSeiUir0WE53E8x7s9iMg/IsLzTzPjuXjpki9SSgB5IyIrd1dVvRORzyLyyK8HEeCPRIQf756pqse7H8wM4E2rCWBKiYP+EJELEfkgIrdLLRKg+Z4L3orIWzPjYsVVBZhSWonIDW4SkfWS20+dHF5YR3hcmhkemF1FgCmlG3c3VV0ttVjNMljU3T+rajKzy7n3JwGGSwF3oqpnLa6oAZqx5pG736nq3yKCNfdcPgfwk4h8NzNi5j9fKSVi8pmZne8etgcw3HradR308cvWZrN5gBXM7Gp86BZAEsLdr1X11SFuJQHc/UXXdV+W3oywcndAXo0TZwAYcUcs2NKEiG/fuPtbyDk4DxqBJ5tXUFESkZPeQGOAxAHoFsVdSon34ciPQUOP/OfuazJURN4voaaIxwFHBhjchPVA3sTyKaUzgLn7d1W92P0urHrl7leqygWoIFVi3sXSA7wO620FaIFo3wU/AqzoxjiQ/V+GhbF0caWUBjw9QKx3Xoq9UZxdquq1meVNWhcWjwT8Fm6fvVjE4iczO9Ge0buuQwhMrrAC8dSXu6qrCnsRnzAF2ZrjfmptNhuSbQVA6uJxKTlSSrieOMJqBP0PAYy9SITnhYsA/gGAFGvUyWzR7i/BZu6+WhL0PYAQHSTVV6wnIvdmNqsF4v0LAN6H9CnFBFbmxusg41tVfdES9JHtJBV1fUiqlJJXAGaWACBC8rSSIAPAkUX6oH8WhX7rghG3fbYj07birQEgpfY+AyzdJHhyD+AIaE/KMMH7kPgAy9lO3E7FbOO5/sMAR0DXQcp4ZKgqhSRoMcwTwENcPEPiuH3ddR3xUyPjWgw+uThkDpzUlCSlU4OMfxbApxhfQDM5i38hQHqhTDMtRD2bJGPAP9mCA1Hj61z3CgH9fwDM+iAzeV/35rgwNN/vwXezcqzVgniNijTXVoz1QbPcik0vVPXGzOC7vVUDuFPu9jTkiLL25BZKpipYQ3Jdxyhjq3cIQp+kmagqfRu7991OHG9hOUjyhwuQTHAo/Wx2+64F40JDVamxQOxBcjDnyeJ5q2lydzQYjXrTJGrUBdJH43amBZkHQ6K9Cw2J1aoSLS5OI4/8y+/vtZ2h1RAP1Q3jxgyW6D2IT4DCX4/RqwCs9bLs0yurQfpNNe6Y+KWZndbK1UTskJ3H0RIUh0K7e4fs+1Js3EdZxObfSkOdJeBr7zLNEJHnZob1t1ZpeIQlEaU08k3urgGZsBpupdf5SllrHh6NLAnI32od31JgEbu5gsV4eLbdbRpgujsSP2dqa2NfKJvwHNRzHi3A4QPMkSVxBexOueP5sTU7R3tgMb7HWoyRaQOqoVO14ESmQil0dpD0HVNSaEVVmSdmSgk+o1c5orcVESoMQ3fepQVoGq/s8eCSWIruH+XM4VALo41huftfqgoQhDBzvyY+3MXwLxIrWGpCW+YeAAAAAElFTkSuQmCC',
      },
    ],
    order:[{ 
      lid: '3864964141426',
      cimg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAFn0lEQVRoQ+2aXXbaRhSAvwHek6wg7gpCV2CyAuMVFK8g5gT6GvJa05quoHgFtVcQvILCCmKvoPa7zfTcmZGQhJBGQsLgVOdwfIzQaL65d+7vKH6wS/1gvPwP/NolXruE9R8cs+QIxZFZTE1nbVE1cxo8mO+XzNHcq1+Z17H4lQLrS97yzAnQQdNG0d5y0nfAzHya3Ko+8v9W19bAIaTmvALAbBjRBMWUJjdl4UsD60uOeOYL0Ntqycs+bOEnasBVkSEKA+sLOigDur4Xi7y5ut8+CDgN/lR9ZwcyxvYGdhK9BLrVzbXSkQy4+szXrFH9gS8YOclWOsvKB1vyc5aFf33Amo9qaCx76rXfwJrbDA0Qt/cmxafvNfACTKBxhzJ/H7Kkswle/0abBlPgA03eZRmvXUt4gebaBBIt5j5W1XeP6wtmKI7VIDs/2AWwQE5pcV02WPCB3gfgK5qM6oSMLsTLAGsegQktJlWq635KWHNDi96uQYPF2KWE79H0ylhXH8n5/mZXwFdq8ELJQ2Il6gdWnKnPxvftxVUfsDVM3ZdW4eQq1wcMp2pggoe9uuoDTgTnJm0Eov7W1LGC64nHaPbi0szjsMYlv1syV0NuslbQPXeC4q353TM3sXFri7Q0H80LFd/CCWq+qiGj0EWM0ZF7t2pIx8W7kk9vKhxIEe8sTXv0BZcozlMW5I4lpwJeq4RLAfvm0wljqMdMgE8bpe8We/+BJVCRTMmWb3+JATX5SbaI04p/IvfE5weeQdLDEw4IOMxbXZ1stUXA+Hed1Iqk/ZC0UNFRQya7lnAs6dZpezhv8mNTeP8QSFPSvDXgjFz38IBTFgSMBMXQBddUDThL28+HCCyF/BWcpk+LKc/8mwC8pkk/mXYeIrDUu9dcnf6dHpq/EtBSku1HQ9tXAyyga3s5dPgr/3+IwPG6dzKYiRbq4uI2oe7hA2+I2fXY+OGV39bcqCHd3QInJlfSLcVBXPCRapHHpm363t17UAPe7RbYJ5bO98NijW1iAPdq4BroKcQBXMJn11SmddFOTIowUwOXVIiRKRh46LGxwqu26ypc7NDgONogc/3o75HFWagB7fok7NQ3ucpg1Ew+Ehvb4w3GxGKzpfXkQSQyY0k31kiXAkOLIykGRkJOyaSkXyR/pXsZaIKMbzK1OoCtnwxeYK1mNLBPT2g2A29KgMICQ0qMnXxmQZOOWRyrVZlbQR727zzYjv/3QGJGeBIULJmkNrWsdCUjmkg5aKMvXSGsVT9N0v/EVFooa6sjjbYW3YQm5BYVvYHN/APrmLCgekzXHGIJrQhzmqZ3FB5CScl8oo3rWVaNzKWJR+4dD2hmsWpHkDN7FBaLAQf7MGGVN+lm9Pu8VM9njFQXZU8OieapYO9njVUM2KqYJO0aK2V7tsrjqg14ZQxz1bnQHg6N7uoF12rAqQerNdY5fth3nJjWBIbTWva2T+OukITNxK0KSbL+Ho89k7JQ9qucowl5C2Dm8cQ349I0fal65D1TSsJmrra0In70jS901RLWY/42Ptm5PR/Y0sAGOpqneki6SuBIZBb64dqBi0JXAey2k4ShEm0tWNIregi18B5OrqTzwRIcyIkaKb+cFbHevpJxvljUWMLWwpIN3rM1cLing1M0Np4eFT0DuQncGacvkc6DHKU4L7uolQBHrLe0W4IuwczF3RsPieVJV49Noi9jSpT1SIPzbVu0lQFH3I/0jqRcE8S/Ai7xdGazLOZfo6D2xlZSjY5dOXAIbq24SCeoTMjhsykNrtICBJcofEKZvNimf/Yk3qjKXnRtwDHwJb1YxhMc9G6Y03edlJw4zLLy1L7o/dqBQ3CbXkrLU1xKIPXofG2jrMXUJ0QsClqplS76cudiROUlYpuzZFrUnxZ954sCl51sFc/tTKWrmGwVY/wHZtiIauC6MOgAAAAASUVORK5CYII=',
      title: 'HUAWEI Mate20 Pro 8GB+128GB 全网通（翡冷翠）',
      image: 'https://res.vmallres.com/pimages//product/6901443261611/group//78_78_1539242990422.png',
     }],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
})