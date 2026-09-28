# Font sources

The active site uses SUIT Variable for body copy and Korean text, with Manrope for the nickname, Latin headings and selected illustration labels
Both font families are licensed under the SIL Open Font License 1.1, permitting use in commercial websites and redistribution with the license and copyright notices included
The downloaded WOFF2 files are unchanged upstream distributions

| Local file | Upstream source | Weight axis | License |
| --- | --- | --- | --- |
| `SUIT-Variable.woff2` | [SUNN / SUIT, pinned revision 55118d9](https://github.com/sun-typeface/SUIT/blob/55118d981336d8fce005eb62888c12c0568ef7b0/fonts/variable/woff2/SUIT-Variable.woff2) | 100–900 | [SUIT-LICENSE.txt](SUIT-LICENSE.txt) |
| `Manrope-Latin-Variable.woff2` | [Google Fonts v20, official Latin variable WOFF2](https://fonts.gstatic.com/s/manrope/v20/xn7gYHE41ni1AdIRggexSg.woff2) | 200–800 | [Manrope-LICENSE.txt](Manrope-LICENSE.txt) |

SUIT's license is copied from the same [pinned source revision](https://github.com/sun-typeface/SUIT/blob/55118d981336d8fce005eb62888c12c0568ef7b0/LICENSE)
Manrope's license is copied from [Google Fonts](https://github.com/google/fonts/blob/main/ofl/manrope/OFL.txt), which credits [The Manrope Project Authors](https://github.com/googlefonts/manrope)
The Manrope file is the Latin subset supplied by the [official Google Fonts stylesheet](https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap)
The site preserves that subset's declared Unicode coverage and uses SUIT for Korean glyphs

The browser loads both fonts from this directory rather than requesting an external font service
The total active WOFF2 payload is 649,372 bytes, compared with 2,057,688 bytes for the former Pretendard font

## Checksums

- SUIT SHA-256: `aa894a204d5a6fbae259dac6868d350cbd373a390caee0313f92946af741df23`
- Manrope SHA-256: `a30ddcd349703aff7464c34bef3fffdff405ee50c113440d7c8693c02d210972`

## Historical asset

`PretendardVariable.woff2` and `Pretendard-LICENSE.txt` are retained from the earlier revision
Neither active page nor stylesheet requests that font
