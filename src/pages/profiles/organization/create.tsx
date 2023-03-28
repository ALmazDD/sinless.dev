import {
  Globe,
  Instagram,
  Linkedin,
  Paperclip,
  Plus,
  Send,
} from "lucide-react";
import { MainNavigation } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function Create() {
  return (
    <>
      <div className="h-screen bg-slate-50">
        <MainNavigation />
        <div className="ms:px-0 container mx-auto max-w-screen-xl px-5 pt-8">
          <h1 className="text-sm">
            <span className="text-slate-300">Профиль /</span>
            Создание профиля
          </h1>

          <div className="flex items-baseline justify-between">
            <h1 className="pt-7 text-5xl  font-extrabold	">{/* Профиль */}</h1>

            <div className="flex gap-3">
              <Button variant="subtle">Отмена</Button>
              <Button>Сохранить</Button>
            </div>
          </div>

          <div className="rounded-lg bg-white shadow-sm">
            <Tabs defaultValue="general">
              <TabsList className="mt-11  flex border border-slate-100 bg-white py-9">
                <div className="flex flex-row flex-nowrap gap-10 overflow-x-auto md:w-full md:justify-around">
                  <TabsTrigger value="general">Общие данные</TabsTrigger>
                  <TabsTrigger value="job">Работа</TabsTrigger>
                  <TabsTrigger value="sertification">
                    Сертефикаты и навыки
                  </TabsTrigger>
                  <TabsTrigger value="addMaterial">Доп.материалы</TabsTrigger>
                  <TabsTrigger value="social">Соцсети</TabsTrigger>
                </div>
              </TabsList>

              {/* General info */}
              <div className="m-auto flex w-auto justify-center">
                <TabsContent
                  className="h-[500px] w-[700px] border-none"
                  value="general"
                >
                  <div className="mb-7">
                    <div className=" mb-5  text-2xl font-semibold">
                      Название профиля
                    </div>
                    <Input placeholder="Название" className=" w-6/12" />
                  </div>

                  <div className="mb-7">
                    <div className=" mb-5  text-2xl font-semibold">
                      Основаная информация
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Cтрана" className=" " />
                      <Input placeholder="Название компании" className="" />
                      <Input placeholder="Город" className=" " />
                      <Input placeholder="Отрасль" className=" " />
                    </div>
                  </div>
                  <div>
                    <div className=" mb-5  text-2xl font-semibold">
                      О компании
                    </div>
                    <Textarea
                      className="bg-slate-100"
                      placeholder="Что будущему партнеру стоит знать? Что  будет полезно другим людям?"
                    />
                  </div>
                </TabsContent>
              </div>

              {/* job experience */}
              <div className="m-auto flex w-auto justify-center">
                <TabsContent
                  className=" h-[500px] w-[700px] border-none"
                  value="job"
                >
                  <div className="mb-7">
                    <div className=" mb-5  text-2xl font-semibold">
                      Опыт работы
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Компания" className=" " />
                      <Input placeholder="Локация" className="" />
                      <div className="flex w-auto gap-3">
                        <Select>
                          <SelectTrigger className="">
                            <SelectValue placeholder="Дата основания" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Textarea
                      className="bg-slate-100"
                      placeholder="Расскажите кратко о вашей компании?"
                    />
                  </div>
                </TabsContent>
              </div>

              {/* sertification */}
              <div className="m-auto flex w-auto justify-center">
                <TabsContent
                  className=" h-[500px] w-[600px] border-none"
                  value="sertification"
                >
                  <div className="justify-between gap-20">
                    <div>
                      <div className=" mb-5  text-2xl font-semibold">
                        Сертификаты
                      </div>
                      <div className="flex flex-col gap-5">
                        <div className="flex gap-5">
                          <Input placeholder="Название сертификата" />
                          <Button variant="outline">
                            <Paperclip className="rotate-90 -scale-y-100" />
                          </Button>
                        </div>

                        <Textarea
                          className="bg-slate-100"
                          placeholder="За что получен сертификат? За какое достижение получена награда?"
                        />

                        <Button variant="outline">
                          <Plus /> Добавить сертификат
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>

              {/*additional material*/}

              <div className="m-auto flex w-auto justify-center">
                <TabsContent
                  className=" h-[500px] w-[900px] border-none"
                  value="addMaterial"
                >
                  <div className="grid justify-between gap-20 sm:grid-cols-2">
                    <div>
                      <div className="mb-5">
                        <p className="text-2xl font-semibold">Презентации</p>
                        <p className="text-sm">Загрузите презентации</p>
                      </div>
                      <div className="flex flex-col gap-5">
                        <div className="flex gap-5">
                          <Input placeholder="Название презентации" />
                          <Button variant="outline">
                            <Paperclip className="rotate-90 -scale-y-100" />
                          </Button>
                        </div>

                        <Button variant="outline">
                          <Plus /> Добавить Презентацию
                        </Button>
                      </div>
                    </div>
                    <div>
                      <div className="mb-5">
                        <p className="text-2xl font-semibold">Видео</p>
                        <p className="text-sm">Укажите ссылки на видеоролики</p>
                      </div>
                      <div className="flex flex-col gap-5">
                        <Input placeholder="Ссылка на видео" />
                        <Button variant="outline">
                          <Plus /> Добавить видео
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>

              {/* social */}
              <div className="m-auto flex w-auto justify-center">
                <TabsContent
                  className="h-[500px] w-[700px] border-none "
                  value="social"
                >
                  <div className="m-auto flex max-w-[330px] flex-col gap-3">
                    <div>
                      <div className="mb-3 text-2xl font-semibold">
                        Социальные сети
                      </div>
                      <p className="text-xs sm:whitespace-nowrap sm:text-sm">
                        Укажите ссылки на ваши аккаунты в социальных сетях
                      </p>
                    </div>

                    <div className="">
                      <div className="mb-7 flex items-center gap-3">
                        <Send />
                        <Input placeholder="Ссылка на Telegram" className="" />
                      </div>
                      <div className="mb-7 flex items-center gap-3">
                        <Linkedin />
                        <Input placeholder="Ссылка на LinkedIn" className="" />
                      </div>
                      <div className="mb-7 flex items-center gap-3">
                        <Instagram />
                        <Input placeholder="Ссылка на Instagram" className="" />
                      </div>
                      <div className="mb-7 flex items-center gap-3">
                        <Globe />
                        <Input placeholder="Ссылка на Вебсайт" className="" />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
