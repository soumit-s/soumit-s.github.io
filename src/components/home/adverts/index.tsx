import Advert from "@/components/advert";

export const MeAdvert = () => (
  <Advert title="Myself">
    Learn more about me, my hobbies, aspirations and likings. Want to see how I
    look ? Then this is the right place for you to go
  </Advert>
);

export const BlogsAdvert = () => (
  <Advert
    title={
      <div className="flex gap-4 items-center">
        Blog
        <div className="px-2 py-1 font-reddit-mono font-bold tracking-wide text-xs border sm:border-2 border-accent text-accent bg-background rounded">
          Coming Soon
        </div>
      </div>
    }
  >
    <div className="flex gap-4">
      My thoughts and experiences. Mostly related to technology, specifically
      programming. Nevertheless, there will be some bizarre ones as well. 👽
    </div>
  </Advert>
);

export const WorkAdvert = () => (
  <Advert title="Work">
    Take a look at my work. Some of them are ambitious unfinished projects (or
    rather most of them 🫣) spanning various domains. But, I hope you can derive
    something useful out of them.
  </Advert>
);
